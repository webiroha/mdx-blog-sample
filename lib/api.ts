import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getSubdirectories(directoryPath: any) {
  const subdirectories: any = [];

  function traverseDirectory(currentPath: any) {
    const items = fs.readdirSync(currentPath, { withFileTypes: true });
    for (const item of items) {
      const itemPath = path.join(currentPath, item.name);
      if (item.isDirectory()) {
        const mdxFiles = fs
          .readdirSync(itemPath)
          .filter((file) => file.endsWith(".mdx"));
        if (mdxFiles.length > 0) {
          subdirectories.push(itemPath);
        }
        traverseDirectory(itemPath);
      }
    }
  }
  const absoluteDirectoryPath = path.resolve(directoryPath);
  traverseDirectory(absoluteDirectoryPath);

  return subdirectories;
}

const baseDirectory = path.join(process.cwd(), "data/mdx/");
const allSubdirectories = getSubdirectories(baseDirectory);

export function getPostSlugs(directory: string) {
  return fs.readdirSync(directory);
}

export function getPostBySlug(slug: string | string[], fields: string[] = []) {
  const convertSlug = !Array.isArray(slug)
    ? slug
    : `${baseDirectory}/${slug.join("/")}`;
  const fullPath = `${convertSlug}/index.mdx`;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      const optimizedPath = !Array.isArray(slug)
        ? slug.replace(process.cwd(), "").replace("data/mdx/", "").substring(1)
        : slug.join("/");
      items[field] = optimizedPath;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const result = allSubdirectories.map((path: string) => {
    const object = getPostBySlug(path, fields);
    return object;
  });
  return result;
}
