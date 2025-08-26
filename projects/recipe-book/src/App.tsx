import { useState } from "react";
import { useStore } from "./store/useStore";

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
}

const App = () => {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [title, setTitle] = useState<string>("");
  const [ingredients, setIgredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6  text-center text-green-600">
          Recipe Book
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIgredients(e.target.value)}
            placeholder="Ingredients"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex justify-between">
            {editingRecipe ? (
              <>
                <button onClick={}>Update Recipe</button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
