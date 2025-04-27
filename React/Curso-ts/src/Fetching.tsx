import { useEffect } from "react";
import { useState } from "react";

type Respuesta = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Fetching = () => {
    const [data, setData] = useState<Respuesta[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as Respuesta[];
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <ul>
        <li>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </li>
      </ul>
    </div>
  );
};

export default Fetching;
