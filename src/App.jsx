export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-green-400 text-white p-6">

      {/* HEADER */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-md">
          فروشگاه آنلاین
        </h1>
        <p className="text-green-200 mt-2 text-lg">بهترین محصولات با بهترین قیمت</p>
      </header>

      {/* PRODUCT CARD */}
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg p-5 rounded-3xl shadow-xl border border-white/20">

        {/* PRODUCT IMAGE */}
        <img
          src="https://cdnfa.com/ghaemmobile/0097f02/files/9714656.jpg"
          alt="هولدر مکانیکی"
          className="rounded-xl w-full mb-5 shadow-lg border border-white/20"
        />

        {/* PRODUCT INFO */}
        <h2 className="text-2xl font-bold text-green-300">هولدر مکانیکی 360 درجه جرثقیلی</h2>
        <p className="mt-3 text-purple-100 leading-7">
          مناسب استفاده برای تمامی خودروها  
          <br /> مکانیسم قفل خودکار – چرخش ۳۶۰ درجه – کیفیت ساخت فوق‌العاده
        </p>

        {/* PRICE */}
        <p className="text-3xl font-extrabold text-green-300 mt-4">
          ۳۶۵,۰۰۰ <span className="text-sm text-green-200">تومان</span>
        </p>

        {/* BUTTON */}
        <button className="w-full mt-6 bg-green-400 hover:bg-green-500 text-purple-900 font-bold py-3 rounded-xl text-lg shadow-lg transition">
          سفارش محصول
        </button>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-purple-200 mt-10 text-sm">
        © 2025 My Shop — تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
}