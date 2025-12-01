export default function Loading() {
  return (
    <div className="w-full h-[calc(100vh-112px)] flex flex-col items-center justify-center bg-brand-bg">
      <div className="relative h-20 w-28 mb-8 flex items-end justify-center">
        {/* Card 3 */}
        <div
          className="absolute h-20 w-28 bg-brand-orange rounded-xl border border-white origin-bottom animate-shuffle-left shadow-lg flex items-center justify-center"
          style={{ animationDuration: '0.5s' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              d="M7.83845 4.4604C8.64653 2.99434 10.2069 2 12.001 2C13.7946 2 15.3546 2.99377 16.1628 4.45912C17.7246 4.08924 19.4071 4.76328 20.2507 6.22444C21.2805 8.00807 20.6693 10.2888 18.8857 11.3186L18.3923 11.6034V15.5H5.54006V11.5651L5.1152 11.3198C3.33157 10.29 2.72046 8.00927 3.75023 6.22564C4.5939 4.76437 6.27659 4.09033 7.83845 4.4604Z"
              fill="#242d4d"
            />
            <path
              d="M5.54006 17V20C5.54006 20.4142 5.87584 20.75 6.29006 20.75H17.6423C18.0565 20.75 18.3923 20.4142 18.3923 20V17H5.54006Z"
              fill="#242d4d"
            />
          </svg>
        </div>

        {/* Card 2 Middle */}
        <div
          className="absolute h-20 w-28 bg-brand-orange rounded-xl border border-white origin-bottom animate-shuffle-right shadow-lg flex items-center justify-center "
          style={{
            animationDirection: 'reverse',
            animationDuration: '0.8s',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              d="M7.83845 4.4604C8.64653 2.99434 10.2069 2 12.001 2C13.7946 2 15.3546 2.99377 16.1628 4.45912C17.7246 4.08924 19.4071 4.76328 20.2507 6.22444C21.2805 8.00807 20.6693 10.2888 18.8857 11.3186L18.3923 11.6034V15.5H5.54006V11.5651L5.1152 11.3198C3.33157 10.29 2.72046 8.00927 3.75023 6.22564C4.5939 4.76437 6.27659 4.09033 7.83845 4.4604Z"
              fill="#242d4d"
            />
            <path
              d="M5.54006 17V20C5.54006 20.4142 5.87584 20.75 6.29006 20.75H17.6423C18.0565 20.75 18.3923 20.4142 18.3923 20V17H5.54006Z"
              fill="#242d4d"
            />
          </svg>
        </div>

        {/* Card 1 Fixed */}
        <div className="absolute h-20 w-28 bg-brand-orange rounded-xl shadow-2xl border border-white flex items-center justify-center z-10 animate-pulse-slow">
          {/* Logo */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0 0 0)"
          >
            <path
              d="M7.83845 4.4604C8.64653 2.99434 10.2069 2 12.001 2C13.7946 2 15.3546 2.99377 16.1628 4.45912C17.7246 4.08924 19.4071 4.76328 20.2507 6.22444C21.2805 8.00807 20.6693 10.2888 18.8857 11.3186L18.3923 11.6034V15.5H5.54006V11.5651L5.1152 11.3198C3.33157 10.29 2.72046 8.00927 3.75023 6.22564C4.5939 4.76437 6.27659 4.09033 7.83845 4.4604Z"
              fill="#242d4d"
            />
            <path
              d="M5.54006 17V20C5.54006 20.4142 5.87584 20.75 6.29006 20.75H17.6423C18.0565 20.75 18.3923 20.4142 18.3923 20V17H5.54006Z"
              fill="#242d4d"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
