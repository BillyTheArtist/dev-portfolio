export function ShineIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 800 800"
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad">
            <stop stopColor="hsl(205, 69%, 60%)" stopOpacity="1" offset="0%"></stop>
            <stop stopColor="hsl(205, 69%, 80%)" stopOpacity="1" offset="100%"></stop>
          </linearGradient>
          <filter
            id="nnneon-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="17 8"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
          <filter
            id="nnneon-filter2"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="10 17"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g stroke-width="16" stroke="url(#nnneon-grad)" fill="none">
          {/* Place your image inside the SVG using the <image> element */}
          <image
            href="https://i.imgur.com/238wrxX.jpg" // Replace with the URL or path to your image
            x="100" // Adjust the x-coordinate as needed
            y="100" // Adjust the y-coordinate as needed
            width="600" // Adjust the width as needed
            height="600" // Adjust the height as needed
          />
  
          <path
            d="M388.4530107167675 233.46125231926777C395.59828768523175 229.33666774729716 404.40171231476825 229.33666774729716 411.5469892832325 233.46240701819613L538.4530203016707 306.7315181170911C545.5982972701349 310.8561026890618 550.0000095849032 318.48057971278024 550.0000095849032 326.7309035556499V473.2691257534399C550.0000095849032 481.5194495963096 545.5982972701349 489.14392662002797 538.4530203016707 493.26966589092694L411.5469892832325 566.538776989822C404.40171231476825 570.6633615617925 395.59828768523175 570.6633615617925 388.4530107167675 566.5376222908938L261.54697969832927 493.26851119199864C254.401702729865 489.14392662002797 249.99999041509682 481.5194495963096 249.99999041509682 473.2691257534399V326.7309035556499C249.99999041509682 318.48057971278024 254.401702729865 310.8561026890618 261.54697969832927 306.7303634181629L388.4530107167675 233.46125231926777Z "
            filter="url(#nnneon-filter)"
          ></path>
          <path
            d="M400.4530107167675 233.46125231926777C407.59828768523175 229.33666774729716 416.40171231476825 229.33666774729716 423.5469892832325 233.46240701819613L550.4530203016707 306.7315181170911C557.5982972701349 310.8561026890618 562.0000095849032 318.48057971278024 562.0000095849032 326.7309035556499V473.2691257534399C562.0000095849032 481.5194495963096 557.5982972701349 489.14392662002797 550.4530203016707 493.26966589092694L423.5469892832325 566.538776989822C416.40171231476825 570.6633615617925 407.59828768523175 570.6633615617925 400.4530107167675 566.5376222908938L273.54697969832927 493.26851119199864C266.401702729865 489.14392662002797 261.9999904150968 481.5194495963096 261.9999904150968 473.2691257534399V326.7309035556499C261.9999904150968 318.48057971278024 266.401702729865 310.8561026890618 273.54697969832927 306.7303634181629L400.4530107167675 233.46125231926777Z "
            filter="url(#nnneon-filter2)"
            opacity="0.25"
          ></path>
          <path
            d="M376.4530107167675 233.46125231926777C383.59828768523175 229.33666774729716 392.40171231476825 229.33666774729716 399.5469892832325 233.46240701819613L526.4530203016707 306.7315181170911C533.5982972701349 310.8561026890618 538.0000095849032 318.48057971278024 538.0000095849032 326.7309035556499V473.2691257534399C538.0000095849032 481.5194495963096 533.5982972701349 489.14392662002797 526.4530203016707 493.26966589092694L399.5469892832325 566.538776989822C392.40171231476825 570.6633615617925 383.59828768523175 570.6633615617925 376.4530107167675 566.5376222908938L249.54697969832927 493.26851119199864C242.401702729865 489.14392662002797 237.99999041509682 481.5194495963096 237.99999041509682 473.2691257534399V326.7309035556499C237.99999041509682 318.48057971278024 242.401702729865 310.8561026890618 249.54697969832927 306.7303634181629L376.4530107167675 233.46125231926777Z "
            filter="url(#nnneon-filter2)"
            opacity="0.25"
          ></path>
          <path d="M388.4530107167675 233.46125231926777C395.59828768523175 229.33666774729716 404.40171231476825 229.33666774729716 411.5469892832325 233.46240701819613L538.4530203016707 306.7315181170911C545.5982972701349 310.8561026890618 550.0000095849032 318.48057971278024 550.0000095849032 326.7309035556499V473.2691257534399C550.0000095849032 481.5194495963096 545.5982972701349 489.14392662002797 538.4530203016707 493.26966589092694L411.5469892832325 566.538776989822C404.40171231476825 570.6633615617925 395.59828768523175 570.6633615617925 388.4530107167675 566.5376222908938L261.54697969832927 493.26851119199864C254.401702729865 489.14392662002797 249.99999041509682 481.5194495963096 249.99999041509682 473.2691257534399V326.7309035556499C249.99999041509682 318.48057971278024 254.401702729865 310.8561026890618 261.54697969832927 306.7303634181629L388.4530107167675 233.46125231926777Z "></path>
        </g>
      </svg>
    );
  }
  