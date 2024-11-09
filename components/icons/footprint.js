const FootprintIcon = props => {
  return (
    <svg
      width={25}
      height={25}
      className="w-5 inline-block transition-all duration-300 transform perspective-1000 group-hover:[transform:rotateX(360deg)]"
      viewBox="0 0 40 40"
      fill="currentColor"
      {...props}
    >
      {/* Monitor frame */}
        <path d="M5 8 h30 v20 h-30 v-20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
        />

        {/* Screen */}
        <path d="M8 11 h24 v14 h-24 v-14"
              fill="currentColor"
              opacity="0.3"
        />



        {/* Monitor stand */}
        <path d="M15 28 h10 v2 h-10 v-2"
              fill="currentColor"
        />

        {/* Stand base */}
        <path d="M12 30 h16 v2 h-16 v-2"
              fill="currentColor"
        />
    </svg>

  )
}

export default FootprintIcon
