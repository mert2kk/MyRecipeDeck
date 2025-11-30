export default function Loading() {
  return (
    <div className="w-full h-[calc(100vh-112px)] flex flex-col items-center justify-center bg-brand-bg">
      <div className="relative flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/PreparingFood.webm"
          className="relative w-64 h-64 object-contain drop-shadow-lg z-10"
        />
      </div>
    </div>
  )
}
