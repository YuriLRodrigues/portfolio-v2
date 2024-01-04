import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const Jest = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex h-20 w-20 items-center justify-center', className)}
      {...props}
    >
      <svg
        viewBox="-13.5 0 283 283"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        fill="#ffffff"
        className="max-w-[60%]"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {' '}
          <g>
            {' '}
            <path
              d="M239.552674,138.960457 C239.552674,124.451866 227.791431,112.690623 213.282197,112.690623 C212.349305,112.690623 211.428604,112.740668 210.521375,112.835625 L246.60326,6.41597594 L93.2669594,6.41597594 L129.298799,112.743234 C128.770117,112.711154 128.238869,112.690623 127.702488,112.690623 C113.193897,112.690623 101.432012,124.451866 101.432012,138.960457 C101.432012,150.688337 109.117786,160.616517 119.725426,163.994562 C114.122939,173.699465 107.072994,182.440036 99.0689845,189.991715 C88.1854556,200.259304 75.7293554,208.044527 62.2569544,212.842442 C46.2174957,204.602322 38.6427188,186.27747 45.4777263,170.20978 C46.2489343,168.395324 47.0374657,166.556487 47.7900672,164.725349 C59.410799,162.013289 68.0692451,151.596207 68.0692451,139.149089 C68.0692451,124.640497 56.308002,112.879254 41.7987689,112.879254 C27.2901774,112.879254 15.5282927,124.640497 15.5282927,139.149089 C15.5282927,148.046212 19.9553604,155.904577 26.7217163,160.656938 C20.2197013,175.461309 10.6617263,190.954763 7.68404211,208.911976 C4.1154406,230.432658 7.67249323,253.276327 26.2854256,266.177059 C69.6334757,296.220808 116.687431,247.551936 166.299461,235.317831 C184.279771,230.883705 204.016152,231.598452 219.857355,222.423515 C231.753335,215.533329 239.595661,204.115344 241.821385,191.296096 C244.020162,178.632116 240.814709,166.023314 233.442679,155.799354 C237.255731,151.239475 239.552674,145.36944 239.552674,138.960457"
              fill="#fff0"
            >
              {' '}
            </path>{' '}
            <path
              d="M235.500174,190.198183 C233.567663,201.327447 226.694159,211.049031 216.641508,216.871587 C207.270881,222.298915 196.041528,223.918965 184.152606,225.633331 C177.783403,226.551467 171.197337,227.501682 164.763332,229.088369 C147.751202,233.283176 131.273528,241.468118 115.338651,249.382945 C83.4490065,265.222865 55.908796,278.900579 29.9405153,260.903587 C10.9188812,247.719908 11.7972371,223.328048 14.0133373,209.961512 C16.0671118,197.577913 21.6195529,186.173402 26.9891368,175.143587 C27.9168962,173.23674 28.8260491,171.365181 29.7108211,169.509662 C32.3721945,170.5728 35.2029514,171.298454 38.1536882,171.628239 C32.6878637,189.666935 41.2834326,209.28077 59.3253373,218.549381 L61.7942296,219.817833 L64.4094075,218.886865 C78.6722647,213.807286 91.8148812,205.656349 103.472184,194.657973 C111.007182,187.549001 117.486099,179.684219 122.810771,171.280489 C124.407082,171.521091 126.039964,171.647487 127.70236,171.647487 C144.260876,171.647487 157.973237,159.268379 160.095022,143.280249 C166.872926,143.031948 174.072365,143.030023 180.889408,143.277682 C183.009909,159.267096 196.722911,171.647487 213.282069,171.647487 C220.205618,171.647487 226.628074,169.477582 231.918741,165.791567 C235.591924,173.310524 236.963032,181.770715 235.500174,190.198183 Z M41.7986406,119.295166 C52.7469714,119.295166 61.6530767,128.201913 61.6530767,139.149602 C61.6530767,143.081993 60.4994727,146.74876 58.5181995,149.8368 C55.2171469,154.983747 49.6088862,158.511928 43.1626907,158.952068 C42.7116431,158.982865 42.2573875,159.004038 41.7986406,159.004038 C39.3592622,159.004038 37.0218987,158.558765 34.8609764,157.750985 C30.4897283,156.114895 26.8473424,152.978735 24.5561744,148.973843 C22.8976281,146.074434 21.9442045,142.722053 21.9442045,139.149602 C21.9442045,128.201913 30.8509514,119.295166 41.7986406,119.295166 Z M107.847924,138.96097 C107.847924,129.014183 115.200706,120.754815 124.755473,119.326605 C125.717237,119.182244 126.701458,119.106534 127.70236,119.106534 C134.067072,119.106534 139.733718,122.122073 143.368405,126.794234 C144.271783,127.954895 145.055182,129.214364 145.685879,130.559166 C146.883753,133.11275 147.556796,135.958905 147.556796,138.96097 C147.556796,140.548299 147.364315,142.091356 147.010791,143.571537 C145.075713,151.671787 138.168846,157.862625 129.705448,158.714675 C129.047162,158.78076 128.378611,158.815407 127.70236,158.815407 C123.73853,158.815407 120.045458,157.643196 116.942019,155.633692 C111.475553,152.09268 107.847924,145.944188 107.847924,138.96097 Z M190.713007,115.351868 C186.459814,119.421562 183.296706,124.621121 181.721568,130.468058 C174.369428,130.192168 166.573297,130.192168 159.263503,130.468058 C157.584425,124.236158 154.101798,118.738254 149.417448,114.562053 L169.961608,73.0201183 L190.713007,115.351868 Z M102.215924,12.8325293 L237.652756,12.8325293 L205.664305,107.177833 C204.277798,107.510825 202.925297,107.929792 201.612575,108.433452 L170.012295,43.9702135 L138.322831,108.048489 C136.953007,107.57691 135.541478,107.197081 134.096585,106.909001 L102.215924,12.8325293 Z M233.136505,138.96097 C233.136505,140.951868 232.838801,142.873472 232.291513,144.687928 C230.987773,149.00464 228.251974,152.703487 224.639102,155.23269 C221.41825,157.487286 217.503182,158.815407 213.282069,158.815407 C204.114831,158.815407 196.381578,152.568108 194.108375,144.107918 C193.666951,142.465412 193.427633,140.74078 193.427633,138.96097 C193.427633,136.246985 193.976205,133.659396 194.966199,131.301502 C195.476275,130.086304 196.112746,128.937833 196.843533,127.858655 C200.416626,122.585311 206.44642,119.106534 213.282069,119.106534 C213.908916,119.106534 214.527423,119.139256 215.139513,119.196359 C225.219753,120.135667 233.136505,128.639487 233.136505,138.96097 Z M245.968585,138.96097 C245.968585,123.002995 234.471042,109.688429 219.327262,106.843557 L255.552866,0.000449122807 L84.3183799,0.000449122807 L120.599162,107.061061 C105.980856,110.313993 95.0158436,123.377051 95.0158436,138.96097 C95.0158436,150.662544 101.200265,160.941682 110.468235,166.717402 C106.01037,173.359286 100.723553,179.609151 94.6661694,185.324559 C85.0581494,194.388499 74.3549113,201.262003 62.8156632,205.78467 C51.1930065,198.483858 46.279603,184.715677 51.3822797,172.72089 L51.781999,171.78094 C52.0322246,171.193873 52.2824501,170.605522 52.5320341,170.017171 C65.2980291,165.564439 74.4851569,153.413742 74.4851569,139.149602 C74.4851569,121.125662 59.8219388,106.463086 41.7986406,106.463086 C23.7753424,106.463086 9.11212431,121.125662 9.11212431,139.149602 C9.11212431,148.246905 12.8513925,156.485101 18.8696381,162.41673 C17.7789113,164.741261 16.6304401,167.105572 15.4518135,169.526344 C9.94941754,180.828198 3.71302657,193.637823 1.35449023,207.862183 C-3.32986065,236.112008 4.22630977,258.694544 22.6307208,271.450274 C33.7991218,279.190584 45.1401143,282.233712 56.553608,282.233712 C78.0447759,282.233712 99.7842446,271.4368 121.047002,260.875356 C136.360164,253.269782 152.194951,245.404359 167.835974,241.547036 C173.655322,240.111767 179.644054,239.248168 185.984385,238.333883 C198.556616,236.520068 211.557438,234.645301 223.072946,227.975828 C236.421518,220.243858 245.559242,207.274474 248.142981,192.393752 C250.361007,179.618775 247.691934,166.823266 241.181578,155.972459 C244.216365,151.013502 245.968585,145.188379 245.968585,138.96097 Z"
              fill="#FFFFFF"
            >
              {' '}
            </path>{' '}
          </g>{' '}
        </g>
      </svg>
    </div>
  )
}
