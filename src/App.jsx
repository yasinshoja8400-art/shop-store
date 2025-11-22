import { useCart } from "./CarContext.jsx";

const PRODUCTS = [
  {
    id: 1,
    name: "هولدر مکانیکی 360 درجه جرثقیلی",
    price: 365000,
    prettyPrice: "۳۶۵,۰۰۰",
    description: "مناسب استفاده برای تمامی خودروها – مکانیسم قفل خودکار – چرخش ۳۶۰ درجه.",
    image: "https://cdnfa.com/ghaemmobile/0097f02/files/9714656.jpg",
  },
  {
    id: 2,
    name: "ماساژور پروانه‌ای EMS Mini Massager",
    price: 149000,
    prettyPrice: "۱۴۹,۰۰۰",
    description: "رفع گرفتگی عضلانی و مناسب ماساژ عضلات بدن با تحریک الکتریکی.",
    image: "https://cdnfa.com/ghaemmobile/0097f02/files/9145423.jpg",
  },
  {
    id: 3,
    name: "فلاسک درجه‌دار یونیک استیل",
    price: 279000,
    prettyPrice: "۲۷۹,۰۰۰",
    description: "حفظ دمای بالا با کیفیت ساخت عالی، مناسب مسافرت و استفاده روزمره.",
    image: "https://cdnfa.com/ghaemmobile/0097f02/files/12811894.jpg",
  },
];

export default function App() {
  const { cart, addToCart, removeFromCart } = useCart();

  const formatNumber = (n) => n.toLocaleString("fa-IR");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-emerald-600 text-white p-6">
      
      {/* HEADER */}
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-extrabold text-emerald-300">
          فروشگاه جرثقیلی
        </h1>

        {/* CART ICON */}
        <div className="relative">
          <div className="h-12 w-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center shadow-lg">
            🛒
          </div>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-emerald-400 text-purple-900 text-xs font-bold rounded-full px-2 py-1">
              {cart.length}
            </span>
          )}
        </div>
      </header>

      {/* PRODUCTS GRID */}
      <div className="grid gap-6 md:grid-cols-3">

        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-5 shadow-xl"
          >
            <img
              src={product.image}
              className="rounded-2xl w-full h-48 object-cover shadow-lg mb-4"
              alt={product.name}
            />

            <h2 className="text-xl font-bold text-emerald-300">{product.name}</h2>

            <p className="text-purple-200 text-sm mt-2 mb-3">{product.description}</p>

            <p className="text-lg font-bold text-emerald-300">
              {product.prettyPrice} <span className="text-sm">تومان</span>
            </p>

            <button
              onClick={() => addToCart(product)}
              className="w-full mt-4 bg-emerald-400 hover:bg-emerald-500 text-purple-900 font-bold py-2 rounded-xl shadow-md transition"
            >
              افزودن به سبد خرید
            </button>
          </div>
        ))}

      </div>

      {/* CART PANEL */}
      <section className="mt-12 bg-purple-950/70 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-xl max-w-xl mx-auto">
        <h3 className="text-lg font-bold mb-4">
          سبد خرید ({cart.length} محصول)
        </h3>

        {cart.length === 0 ? (
          <p className="text-purple-200 text-sm">
            سبد خرید خالی است. برای افزودن محصول، روی دکمه "افزودن به سبد خرید" بزنید.
          </p>
        ) : (
          <>
            <ul className="space-y-3 max-h-64 overflow-y-auto p-1">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-white/10 p-3 rounded-2xl border border-white/10"
                >
                  <div>
                    <p className="font-semibold text-emerald-300">{item.name}</p>
                    <p className="text-xs text-purple-200 mt-1">
                      قیمت: {formatNumber(item.price)} تومان
                    </p>
                  </div><button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs px-3 py-1 bg-red-500/80 hover:bg-red-500 text-white rounded-full"
                  >
                    حذف
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-white/20 pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-200">جمع کل:</span>
                <span className="text-lg font-bold text-emerald-300">
                  {formatNumber(total)} تومان
                </span>
              </div>

              <button
                onClick={() => alert("به زودی به درگاه پرداخت وصل می‌کنیم 😉")}
                className="w-full bg-gradient-to-r from-emerald-400 to-lime-300 text-purple-900 font-bold py-3 rounded-2xl shadow-xl hover:brightness-110 transition"
              >
                ثبت سفارش
              </button>
            </div>
          </>
        )}
      </section>

      <footer className="text-center text-xs text-purple-200 mt-10">
        © ۲۰۲۵ فروشگاه جرثقیلی
      </footer>
    </div>
  );
}