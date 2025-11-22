import { Link, NavLink, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CarContext.jsx";

const PRODUCTS = [
  {
    id: "holder",
    name: "هولدر مکانیکی 360 درجه جرثقیلی",
    price: 365000,
    prettyPrice: "۳۶۵,۰۰۰",
    short: "هولدر حرفه‌ای مناسب همه نوع خودرو با چرخش ۳۶۰ درجه.",
    description:
      "هولدر مکانیکی ۳۶۰ درجه جرثقیلی، مناسب برای استفاده روی شیشه و داشبورد، مکانیسم قفل خودکار، بدنه مقاوم و مناسب همه‌ی خودروها.",
    image: "https://cdnfa.com/ghaemmobile/0097f02/files/9714656.jpg",
    badge: "پرفروش",
  },
  {
    id: "ems-massager",
    name: "ماساژور برقی پروانه‌ای EMS Mini Massager",
    price: 149000,
    prettyPrice: "۱۴۹,۰۰۰",
    short: "مناسب برای گرفتگی عضلات و تسکین دردهای عضلانی.",
    description:
      "ماساژور برقی پروانه‌ای EMS با پد ژله‌ای، مناسب شانه، کمر، پا و سایر عضلات بدن. کمک به کاهش خستگی، رفع گرفتگی عضلات و تسکین درد.",
    image: "https://cdnfa.com/ghaemmobile/0097f02/files/9145423.jpg",
    badge: "جدید",
  },
  {
    id: "unique-flask",
    name: "فلاسک درجه‌دار یونیک استیل",
    price: 279000,
    prettyPrice: "۲۷۹,۰۰۰",
    short: "فلاسک استیل با نمایشگر دمای هوشمند، مناسب سفر و روزمره.",
    description:
      "فلاسک درجه‌دار یونیک از جنس استیل با کیفیت بالا، حفظ دما در مدت طولانی، همراه نمایشگر دما روی درب، مناسب محل کار، سفر و باشگاه.",
    image: "https://cdnfa.com/ghaemmobile/0097f02/files/12811894.jpg",
    badge: "پیشنهاد ویژه",
  },
];

const formatNumber = (n) => n.toLocaleString("fa-IR");

// کامپوننت هدر + سبد
function Header() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-20 bg-slate-950/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* لوگو */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-purple-500 via-violet-400 to-emerald-400 flex items-center justify-center text-xl font-black shadow-lg shadow-emerald-400/40">
            G
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-white tracking-tight">جرثقیلی شاپ</p>
            <p className="text-[11px] text-slate-400">لوازم خودرو و اکسسوری خاص</p>
          </div>
        </Link>

        {/* منو */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-emerald-300 ${
                isActive ? "text-emerald-300" : "text-slate-300"
              }`
            }
          >
            خانه
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-emerald-300 ${
                isActive ? "text-emerald-300" : "text-slate-300"
              }`
            }
          >
            محصولات
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-emerald-300 ${
                isActive ? "text-emerald-300" : "text-slate-300"
              }`
            }
          >
            درباره ما
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-emerald-300 ${
                isActive ? "text-emerald-300" : "text-slate-300"
              }`
            }
          >
            تماس
          </NavLink>
        </nav>

        {/* آیکون سبد */}
        <Link
          to="/cart"
          className="relative h-11 w-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-md shadow-emerald-400/40 hover:bg-white/15 transition"
        >
          <span className="text-xl">🛒</span>
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-emerald-400 text-purple-900 text-[10px] font-bold rounded-full px-1.5 py-0.5">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

// صفحه اصلی
function HomePage() {
  const navigate = useNavigate();
  const mainProduct = PRODUCTS[0];

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] items-center mb-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
            ✨ ارسال سریع + ضمانت کیفیت
          </span>

          <h1 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-white">
            فروشگاه
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-emerald-300 bg-clip-text text-transparent">
              لوازم کاربردی خودرو و لایف‌استایل
            </span>
          </h1>

          <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed max-w-xl">
            هر چیزی که برای راحتی بیشتر داخل ماشین و زندگی روزمره لازم داری، اینجاست؛
            از هولدر حرفه‌ای تا ماساژور و فلاسک استیل درجه‌دار.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/products")}
              className="rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 text-purple-900 px-6 py-2.5 text-sm font-semibold shadow-lg shadow-emerald-400/50 hover:brightness-110 transition"
            >
              مشاهده محصولات
            </button>
            <button
              onClick={() => navigate(`/product/${mainProduct.id}`)}
              className="rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-emerald-400 hover:bg-slate-900/60 transition"
            >
              مشاهده هولدر جرثقیلی
            </button>
          </div>
        </div>

        {/* کارت محصول ویژه */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-28 w-28 rounded-3xl bg-purple-500/40 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-emerald-400/40 blur-2xl" />
          <div className="relative bg-slate-950/80 border border-white/15 rounded-3xl p-4 shadow-2xl shadow-slate-900/80">
            <p className="text-xs text-slate-400 mb-1">پیشنهاد ویژه امروز</p>
            <h2 className="text-lg font-bold text-emerald-300">{mainProduct.name}</h2>
            <p className="text-xs text-slate-300 mt-1 line-clamp-2">
              {mainProduct.short}
            </p>
            <div className="mt-3 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={mainProduct.image}
                alt={mainProduct.name}
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-2xl font-extrabold text-emerald-300">
                {mainProduct.prettyPrice}
                <span className="text-xs text-emerald-200 mr-1">تومان</span>
              </p>
              <button
                onClick={() => navigate(`/product/${mainProduct.id}`)}
                className="rounded-full bg-emerald-400 text-purple-900 text-xs font-bold px-4 py-2 hover:bg-emerald-500 transition"
              >
                جزئیات بیشتر
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* بخش دسته‌ها/هایلایت */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <h3 className="text-sm font-semibold text-white mb-1">لوازم خودرو</h3>
          <p className="text-xs text-slate-300">
            هولدر، شارژر، اکسسوری داشبورد و هرچیزی برای راحت‌تر شدن رانندگی.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <h3 className="text-sm font-semibold text-white mb-1">سلامت و ریلکس</h3>
          <p className="text-xs text-slate-300">
            ماساژورهای کاربردی برای رفع خستگی و گرفتگی عضلات.
          </p>
        </div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <h3 className="text-sm font-semibold text-white mb-1">اکسسوری روزمره</h3>
          <p className="text-xs text-slate-300">
            فلاسک درجه‌دار و وسایل کاربردی برای کار، سفر و باشگاه.
          </p>
        </div>
      </section>
    </main>
  );
}

// صفحه لیست محصولات
function ProductsPage() {
  const { addToCart } = useCart();
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">همه محصولات</h2>
          <p className="text-sm text-slate-300 mt-1">
            سه محصول اصلی فروشگاه؛ برای شروع یک فروش حرفه‌ای آنلاین.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {PRODUCTS.map((p) => (
          <article
            key={p.id}
            className="bg-white/8 border border-white/10 rounded-3xl p-4 shadow-xl shadow-slate-950/60 backdrop-blur-sm"
          >
            <Link to={`/product/${p.id}`} className="block overflow-hidden rounded-2xl mb-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover hover:scale-[1.03] transition"
              />
            </Link>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-semibold text-white line-clamp-2">{p.name}</h3>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                {p.badge}
              </span>
            </div>
            <p className="text-xs text-slate-300 line-clamp-3 mb-2">{p.short}</p>
            <p className="text-lg font-bold text-emerald-300 mb-3">
              {p.prettyPrice} <span className="text-xs text-emerald-200">تومان</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => addToCart(p)}
                className="flex-1 rounded-xl bg-emerald-400 text-purple-900 text-xs font-bold py-2 hover:bg-emerald-500 transition"
              >
                افزودن به سبد
              </button>
              <Link
                to={`/product/${p.id}`}
                className="flex-1 text-center rounded-xl border border-slate-500 text-xs font-semibold text-slate-100 py-2 hover:border-emerald-400 hover:bg-slate-900/50 transition"
              >
                جزئیات
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

// صفحه جزئیات محصول
function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-slate-200 text-sm">محصول پیدا نشد.</p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 rounded-full bg-emerald-400 text-purple-900 text-xs font-bold px-4 py-2"
        >
          برگشت به محصولات
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-xs text-slate-300 hover:text-emerald-300 mb-4"
      >
        ← برگشت
      </button>

      <section className="grid gap-6 md:grid-cols-[1.1fr,0.9fr] items-start bg-white/5 border border-white/10 rounded-3xl p-4 md:p-6 shadow-xl shadow-slate-950/70">
        <div>
          <div className="rounded-2xl overflow-hidden border border-white/10 mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-bold text-emerald-300 mb-2">
            {product.name}
          </h1>
          <p className="text-sm text-slate-300 mb-4 leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-extrabold text-emerald-300 mb-4">
            {product.prettyPrice}
            <span className="text-xs text-emerald-200 mr-1">تومان</span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 text-purple-900 font-bold py-3 text-sm shadow-lg shadow-emerald-400/60 hover:brightness-110 transition mb-3"
          >
            افزودن به سبد خرید
          </button>

          <p className="text-xs text-slate-300">
            🔸 ارسال سریع به سراسر ایران  
            <br />
            🔸 امکان هماهنگی از طریق واتساپ بعد از ثبت سفارش
          </p>
        </div>
      </section>
    </main>
  );
}

// صفحه سبد خرید
function CartPage() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-4">سبد خرید</h2>

      {cart.length === 0 ? (
        <p className="text-sm text-slate-300">سبد شما خالی است.</p>
      ) : (
        <>
          <ul className="space-y-3 mb-4">
            {cart.map((item, index) => (
              <li
                key={index + item.id}
                className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-3 py-2 text-sm"
              >
                <div>
                  <p className="font-semibold text-emerald-300">{item.name}</p>
                  <p className="text-xs text-slate-300 mt-1">
                    قیمت: {formatNumber(item.price)} تومان
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs px-3 py-1 rounded-full bg-red-500/80 hover:bg-red-500 text-white"
                >
                  حذف
                </button>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/15 pt-4 flex items-center justify-between mb-3">
            <span className="text-sm text-slate-200">جمع کل</span>
            <span className="text-lg font-bold text-emerald-300">
              {formatNumber(total)} <span className="text-xs">تومان</span>
            </span>
          </div>

          <button
            onClick={() =>
              alert(
                "در مرحله بعد این دکمه را به درگاه پرداخت یا واتساپ وصل می‌کنیم 😉"
              )
            }
            className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 text-purple-900 font-bold py-3 text-sm shadow-lg shadow-emerald-400/60 hover:brightness-110 transition"
          >
            ثبت سفارش
          </button>
        </>
      )}
    </main>
  );
}

// صفحه‌های ساده درباره و تماس
function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-3">درباره جرثقیلی شاپ</h2>
      <p className="text-sm text-slate-300 leading-relaxed">
        جرثقیلی شاپ یک فروشگاه کوچک و جمع‌وجور آنلاین است که تمرکزش روی چند محصول
        خاص و کاربردی است؛ محصولاتی که واقعاً به درد زندگی روزمره و داخل ماشین می‌خورند.
      </p>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-3">تماس با ما</h2>
      <p className="text-sm text-slate-300 mb-3">
        برای ثبت سفارش، سوال یا همکاری، فعلاً می‌توانید از طریق واتساپ یا اینستاگرام با ما هماهنگ کنید.
      </p>
      <div className="space-y-2 text-sm text-slate-200">
        <p>واتساپ: 09xx xxx xxxx</p>
        <p>اینستاگرام: @yourpage</p>
      </div>
    </main>
  );
}

// کامپوننت اصلی
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-emerald-700 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer className="mt-10 border-t border-white/10 py-4 text-center text-[11px] text-slate-400">
        © ۲۰۲۵ جرثقیلی شاپ – توسعه داده‌شده با React و Tailwind CDN
      </footer>
    </div>
  );
}
