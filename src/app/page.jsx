"use client";

import cc5 from "./Assets/Images/cc5.png";
import Image from "next/image";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
export default function Home() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      console.log(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
                Selamat Datang Aplikasi E-Choice.
                <br />
                Lakukan Pemilihanmu Sekarang !
              </h2>
              <p className="mt-6 text-lg leading-8 text-dark-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-dark px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-dark"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
              {/* 
              {scanResult ? (
                <div>
                  Success:{" "}
                  <a href={"https://" + scanResult} target={"_blank"}>
                    {scanResult}
                  </a>
                </div>
              ) : (
                <div id="reader" className="text-center mt-12" style={{ width: "350px", height: "350px" }}></div>
              )} */}

            
                <div
                  id="reader"
                  className="text-center mt-12"
                  style={{ width: "350px", height: "350px" }}
                ></div>
           
            </div>
            <div className="relative mt-16 h-10 lg:mt-8">
              <Image
                className="absolute left-0 top-2 w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={cc5}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
