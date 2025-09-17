interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  return (
    <div>
      <h1 className="text-2xl font-bold">Projet {slug}</h1>
      <p>Détails du projet {slug}...</p>
    </div>
  );
}
