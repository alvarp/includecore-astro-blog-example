// You need to create this env vars in a .env file or in the environment variables of your hosting service
const projectId = import.meta.env.PROJECT_ID;
const databaseId = import.meta.env.DATABASE_ID;

export async function getBlogPosts() {
  const postsRes = await fetch(
    `https://www.includecore.com/api/projects/${projectId}/components/${databaseId}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const { data } = await postsRes.json();

  return data;
}
