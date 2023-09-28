"use client";
import { supabase } from "../../../../lib/supabaseClient";
import React, { useState } from "react";

export default function Page({ params }) {
  const products = [
    {
      id: 1,
      name: "Hadiid Andri Yulison",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "andriy",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 3,
      name: "Budi",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "agus",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 5,
      name: "andi",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 6,
      name: "fajar",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 7,
      name: "arif",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 8,
      name: "gani",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 9,
      name: "dani",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 10,
      name: "ajo",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 11,
      name: "riski",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1654102383500-de2ebb0f053d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1561&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];

  //  const [checkedItems, setCheckedItems] = useState({});
  const [voting, setVoting] = useState({});


  const handleCheckboxChange = (event) => {
    const { name, value, checked } = event.target;

    // Memeriksa jumlah data yang telah dicentang harus tepat 9 centang
    const checkedCount = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;

    setVoting((prevState) => ({
      ...prevState,
      nama_pemilih: "hadiid",
      utusan_pemilih: "PR IPM SMK Muhammadiyah 3 Pekanbaru",
      [`voting${checkedCount}`]: value,
    }));

    const vote = "voting" + checkedCount;

    console.log(vote);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const vote = Object.keys(voting).length;
    


    if (vote === 11) {


      const { data, error } = await supabase
        .from("voting")

        .insert([
          {
            nama_pemilih: voting.nama_pemilih,
            utusan_pemilih: voting.utusan_pemilih,
            vote1: voting.voting1,
            vote2: voting.voting2,
            vote3: voting.voting3,
            vote4: voting.voting4,
            vote5: voting.voting5,
            vote6: voting.voting6,
            vote7: voting.voting7,
            vote8: voting.voting8,
            vote9: voting.voting9,
          },
        ])
        .select();
    } else if (vote !== 11) {
      console.log("tidak valid");
    }

    //  simpan ke database
    // nama pemilih
    // utusan pemilih
    // nama calon formatur 1 - 9
    //  tanggal pemilihan
    //  waktu pemilihan
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <form onSubmit={handleSubmit} method="post">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Selamat Datang {params.data[0]} Utusan {params.data[1]}
            </h2>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Pilihlah <b className="text-red-500">9 Formatur</b> dari Calon
              Formatur yang tersedia
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div>
                    <h3 className="text-lg text-gray-700 mt-2 mb-3 font-bold">
                      Nomor {product.id}
                    </h3>
                    <h3 className="text-md text-gray-700 mt-2 mb-3 font-bold">
                      {product.name}
                    </h3>
                  </div>

                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-lg text-gray-700">
                        <input
                          type="checkbox"
                          name={`vote${product.id}`}
                          id={`vote${product.id}`}
                          value={product.name}
                          className="h-7 w-7 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={handleCheckboxChange}
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className=" text-center mt-12 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Simpan Hasil Votes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
