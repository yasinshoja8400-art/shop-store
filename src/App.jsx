{/* CART PANEL */}
        <section className="bg-purple-950/70 backdrop-blur-xl rounded-3xl border border-white/20 p-5 md:p-6 shadow-2xl shadow-purple-900/70">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            سبد خرید
            <span className="text-xs text-purple-200">
              ({cart.length} محصول)
            </span>
          </h3>

          {cart.length === 0 ? (
            <p className="text-sm text-purple-200">
              سبد خرید شما خالی است. روی{" "}
              <span className="font-semibold text-emerald-300">
                «افزودن به سبد خرید»
              </span>{" "}
              کلیک کنید.
            </p>
          ) : (
            <>
              <ul className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-3 py-2 text-sm"
                  >
                    <div>
                      <p className="font-semibold text-emerald-200">
                        {item.name}
                      </p>
                      <p className="text-xs text-purple-200 mt-1">
                        قیمت: {formatNumber(item.price)} تومان
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-xs px-3 py-1 rounded-full bg-red-500/80 hover:bg-red-500 text-white"
                    >
                      حذف
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-white/15 pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-purple-100">جمع کل</span>
                  <span className="text-lg font-bold text-emerald-300">
                    {formatNumber(total)}{" "}
                    <span className="text-xs text-emerald-200">تومان</span>
                  </span>
                </div>

                <button
                  onClick={() =>
                    alert(
                      "برای نهایی کردن سفارش، این دکمه را بعداً به واتساپ یا پیج اینستاگرام خودت وصل می‌کنیم. 😉"
                    )
                  }
                  className="w-full rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-300 text-purple-900 font-bold py-3 text-sm shadow-lg shadow-emerald-500/60 hover:brightness-110 transition"
                >
                  ثبت سفارش
                </button>
              </div>
            </>
          )}
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mt-10 text-center text-xs text-purple-200">
        © ۲۰۲۵ فروشگاه جرثقیلی – تمامی حقوق محفوظ است.
      </footer>
    </div>
  );
}