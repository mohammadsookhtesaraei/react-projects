
import { use, useEffect, useMemo, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

import { useDebounceValue } from "../../hooks/useDebounce";
import type { Book } from "../../types/book-interface";
import { getAllBooks } from "../../services/bookService";
import { SearchContext } from "../../context/SearchContext";

const Search = () => {
  const { setSearchQuery } = use(SearchContext);

  const parentRef = useRef<HTMLDivElement>(null);
 

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("q")?.trim() ?? "";

  const [books, setBooks] = useState<Book[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const [isSorted, setIsSorted] = useState(false);

  const [showAllCategory, setShowAllCategory] = useState(false);

  const [debouncedQuery] = useDebounceValue(query, 1000);

  // دریافت کتاب‌ها
  useEffect(() => {
    const getData = async () => {
      try {
  

        const response = await getAllBooks();
        setBooks(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data?.message);
        } else {
          console.log("Unknown error");
        }
      }
    };

    getData();
  }, []);

  // Auto animate
  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, []);

  // وقتی search فعال شد، category به all برگردد
  useEffect(() => {
    if (debouncedQuery.trim()) {
      setSelectedCategory("all");
    }
  }, [debouncedQuery]);

  // Loading هنگام تغییر search/category
  useEffect(() => {
     setIsSorted(true);
    const timer = setTimeout(() => {
      setIsSorted(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [debouncedQuery, selectedCategory]);

  // دسته‌بندی‌ها
  const categories = useMemo(() => {
    const allCategories = books.flatMap((book) => book.categories);

    return [...new Set(allCategories)];
  }, [books]);

  // فیلتر کتاب‌ها
  const filteredBooks = useMemo(() => {
    // Search
    if (debouncedQuery.trim()) {
      return books.filter((book) =>
        book.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
    }

    // همه کتاب‌ها
    if (selectedCategory === "all") {
      return books;
    }

    // Category
    return books.filter((book) =>
      book.categories.includes(selectedCategory)
    );
  }, [books, selectedCategory, debouncedQuery]);

  const handleCategory = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const category = event.currentTarget.dataset.category;


    if (!category) return;

    setSelectedCategory(category);

    // پاک کردن search
    setSearchQuery("");
    setSearchParams({});
  };

  return (
    <div className="py-10">

      {/* Categories */}
      <div>

        <button
          className="px-4 py-1 rounded-md bg-gray-300 m-4 cursor-pointer"
          data-category="all"
          onClick={handleCategory}
        >
          all
        </button>

        <div>
          {(showAllCategory
            ? categories
            : categories.slice(0, 10)
          ).map((category) => (
            <button
              key={category}
              className="px-4 py-1 rounded-md bg-gray-300 m-4 cursor-pointer"
              data-category={category}
              onClick={handleCategory}
            >
              {category}
            </button>
          ))}
        </div>

        {categories.length > 10 && (
          <div className="w-full flex justify-center text-rose-500">
            <button
              onClick={() =>
                setShowAllCategory((prev) => !prev)
              }
            >
              {showAllCategory
                ? "نمایش کمتر"
                : "نمایش بیشتر"}
            </button>
          </div>
        )}
      </div>

      {/* Books */}
      <div ref={parentRef}>

        {isSorted ? (
          <div className="w-10 h-10 mx-auto border-4 border-gray-300 border-t-rose-500 rounded-full animate-spin" />
        ) : filteredBooks.length > 0 ? (
          <div className="flex flex-wrap my-6">

            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="p-1 w-full sm:w-6/12 md:w-4/12 lg:w-3/12"
              >
                <Link to={`/book/${book.id}`}>
                  <div className="border border-gray-400 shadow-md bg-white rounded-md flex flex-col items-center">

                    <div className="p-4">
                      <img
                        className="block w-56 h-56 object-cover rounded-md"
                        src={book.image}
                        alt={book.title}
                      />
                    </div>

                    <div className="border rounded-md m-4 w-80 p-1 bg-gray-900 text-white">
                      <p>{book.title}</p>
                      <p>{book.author}</p>
                      <p>{book.price}</p>
                    </div>

                  </div>
                </Link>
              </div>
            ))}

          </div>
        ) : (
          <div className="text-rose-500">
            کتابی یافت نشد
          </div>
        )}

      </div>
    </div>
  );
};

export default Search;

