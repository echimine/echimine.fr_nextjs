'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { CategoriesApiResponse } from '../types/categories';

export default function Home() {
  const [data, setData] = useState<CategoriesApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = 'http://localhost:3001';

  useEffect(() => {
    fetch(`${API_URL}/api/v1/categories`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((json: CategoriesApiResponse) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!data || data.data.length === 0)
    return <p>{'Aucune catégorie trouvée.'}</p>;
  console.log(data);
  return (
    <>
      <h1>Catégories :</h1>
      {data.data.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>

          {/* Image catégorie si disponible */}
          {category.pathImg && category.pathImg.trim() !== '' ? (
            <Image
              src={category.pathImg}
              alt={category.name}
              width={200}
              height={200}
            />
          ) : (
            <p>{`pas d'image`}</p>
          )}

          <ul>
            {category.articles.map((article) => (
              <li key={article.id}>
                {article.name} ({article.nbrLikes} likes)
                {article.pathImg && (
                  <Image
                    src={`${API_URL}${article.pathImg}`}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
