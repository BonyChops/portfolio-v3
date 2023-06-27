export default function Works() {
  return (
    <div className="min-h-screen py-24 px-24">
      <h2 className="text-4xl font-bold mb-10">Works</h2>
      <div>
        <div className="rounded-xl w-72 h-52 bg-white dark:bg-gray-900">
          <div
            className="w-full rounded-t-xl h-32 bg-gray-500 bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/MtFuji_FujiCity.jpg/220px-MtFuji_FujiCity.jpg)",
            }}
          ></div>
          <div className="px-2 py-2">
            <p className="text-2xl font-bold">山wwwwww</p>
            <p>山を作りました</p>
          </div>
        </div>
      </div>
    </div>
  );
}
