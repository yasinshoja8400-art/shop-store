import { useState } from "react";

export default function App() {
  const product = {
    id: 1,
    name: "هولدر مکانیکی 360 درجه جرثقیلی",
    price: 365000,
    image: "https://cdnfa.com/ghaemmobile/0097f02/files/9714656.jpg",
  };

  const [cart, setCart] = useState([]);

  function handleAdd() {
    setCart([...cart, product]);
  }

  function handleRemove(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const formatNumber = (n) => n.toLocaleString("fa-IR");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-emerald-700 text-white p-6">
      {/* HEADER */}
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-emerald-300 drop-shadow-lg">
          فروشگاه جرثقیلی
        </h1>
        <p className="text-purple-200 mt-2 text-sm">بهترین هولدر مکانیکی خودرو</p>
      </header>

      {/* MAIN PRODUCT CARD */}
      <main className="max-w-xl mx-auto bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20">

        <img
          src={product.image}
          className="rounded-2xl w-full shadow-xl"
          alt="product"
        />

        <h2 className="mt-4 text-xl font-bold text-emerald-300">
          {product.name}
        </h2>

        <p className="text-purple-200 mt-1 text-sm">مناسب برای تمام خودروها</p>

        <p className="mt-3 text-lg font-bold text-emerald-300">
          قیمت: {formatNumber(product.price)} <span className="text-sm">تومان</span>
        </p>

        <button
          onClick={handleAdd}
          className="w-full mt-5 bg-gradient-to-r from-purple-500 to-emerald-400 text-white py-3 rounded-2xl font-bold shadow-lg hover:scale-[1.03] transition"
        >
          افزودن به سبد خرید
        </button>
      </main>

      {/* CART PANEL */}
      <section className="mt-10 bg-purple-950/70 backdrop-blur-xl rounded-3xl border border-white/20 p-5 shadow-2xl">
        <h3 className="text-lg font-bold mb-4">
          سبد خرید ({cart.length} محصول)
        </h3>

        {cart.length === 0 ? (
          <p className="text-purple-200 text-sm">
            سبد خرید خالی است. روی
            <span className="text-emerald-300 font-semibold"> افزودن به سبد خرید </span>
            کلیک کنید.
          </p>
        ) : (
          <>
            <ul className="space-y-3 max-h-56 overflow-y-auto">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-white/10 p-3 rounded-2xl"
                >
                  <div>
                    <p className="font-semibold text-emerald-300">{item.name}</p>
                    <p className="text-xs text-purple-200 mt-1">
                      قیمت: {formatNumber(item.price)} تومان
                    </p>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-xs bg-red-500 px-3 py-1 rounded-full text-white"
                  >
                    حذف
                  </button>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="mt-4 border-t border-white/20 pt-4">
              <div className="flex justify-between mb-3">
                <span className="text-sm text-purple-200">جمع کل</span>
                <span className="text-lg font-bold text-emerald-300">
                  {formatNumber(total)} <span className="text-xs">تومان</span>
                </span>
              </div>

              <button
                onClick={() => alert("فعلاً تستی است — بعداً وصلش می‌کنیم")}
                className="w-full bg-gradient-to-r from-emerald-400 to-lime-300 text-purple-900 py-3 rounded-2xl font-bold hover:brightness-110 transition"
              >
                ثبت سفارش
              </button>
            </div>
          </>
        )}
      </section>{/* FOOTER */}
      <footer className="text-center mt-10 text-xs text-purple-200">
        © ۲۰۲۵ فروشگاه جرثقیلی – تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
}
