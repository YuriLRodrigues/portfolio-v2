import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export const Mongoose = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn('flex h-20 w-20 items-center justify-center', className)}
      {...props}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 58 58"
        fill="#F6FBF4"
        className="max-w-[60%] md:max-w-[65%]"
      >
        <path
          id="Vector"
          d="M32.7905 18.426C32.0048 18.4588 30.6773 18.6698 30.6773 18.7588C30.6773 18.7959 31.613 19.2646 31.6847 19.2646C31.7503 19.2646 32.8364 19.8065 33.0778 19.9565C33.3928 20.158 33.6183 20.3409 33.5522 20.3409C33.51 20.3409 32.3948 19.9091 31.972 19.7277C31.628 19.5829 30.1978 19.1563 29.5017 18.9918C29.1248 18.9037 28.9655 18.8709 28.3247 18.7537C27.3797 18.5812 26.2683 18.5709 25.785 18.7298C25.0927 18.9548 24.937 19.2313 24.937 20.2513C24.937 20.8138 24.9647 21.0515 25.087 21.5568C25.1405 21.7766 25.2905 22.2599 25.3603 22.423C25.3805 22.4746 25.4461 22.634 25.5009 22.7746C25.5577 22.9138 25.7283 23.2743 25.8783 23.5691C26.7206 25.2412 27.982 26.6348 29.76 27.861C30.3206 28.2454 31.8441 28.9743 32.4553 29.1487C32.6109 29.1909 32.6625 29.2785 32.5359 29.2785C32.3953 29.2785 31.1063 28.9232 30.8423 28.8116C30.7419 28.7671 30.64 28.7262 30.5367 28.6888C29.6194 28.319 28.4475 27.5573 27.4786 26.691C26.4168 25.7465 25.568 24.5869 24.9886 23.2893C24.6169 22.4502 24.3642 21.4729 24.3019 20.6212C24.2653 20.1341 24.2269 20.0169 24.1003 20.0226C24.0581 20.0226 23.6573 20.008 23.2158 19.9841C22.0148 19.9326 20.3742 20.0648 18.75 20.3451C15.6445 20.8738 12.2939 22.0954 8.84578 23.9573C8.27235 24.2677 7.7058 24.5908 7.14657 24.9262C7.08094 24.9646 6.87375 25.0907 6.68532 25.2079C6.49829 25.3251 6.27703 25.4554 6.19641 25.5065C6.01828 25.611 4.04672 26.9493 3.81047 27.1269C3.72235 27.1912 3.47719 27.374 3.27047 27.5244C2.33438 28.2163 0.296722 29.879 0.179535 30.0477C0.122816 30.1321 0.212347 30.1743 0.333285 30.1321C0.395629 30.1077 0.555004 30.0749 0.682972 30.0571C0.814691 30.0365 1.1536 29.9488 1.43532 29.8555C1.72125 29.7655 2.02875 29.6723 2.11688 29.6484C2.81438 29.4852 3.09657 29.4285 3.50438 29.368C3.68953 29.3446 3.96235 29.3024 4.1161 29.2785C6.02766 28.9982 6.93985 28.9288 7.7911 28.9926C9.64032 29.1426 11.4094 29.458 12.4219 29.8166C13.1798 30.0894 14.7216 30.9229 15.3994 31.4226C15.7913 31.7179 17.0508 32.9718 17.3292 33.3505C17.5448 33.651 17.7848 33.913 17.8416 33.913C17.8603 33.913 17.8838 32.9568 17.8894 31.7924L17.902 29.6774L20.378 29.6634C22.3261 29.654 22.8661 29.6685 22.8994 29.7102C22.9467 29.7712 23.0602 29.9727 23.4319 30.659C23.7853 31.3199 23.9592 31.6387 24.0675 31.829C24.1238 31.9335 24.2541 32.1754 24.3642 32.3676C24.4664 32.5598 24.6586 32.9151 24.7908 33.1584C24.9225 33.4021 25.0303 33.6088 25.0303 33.6177C25.0303 33.6599 25.2244 33.913 25.2577 33.913C25.2759 33.913 25.3233 33.8413 25.3561 33.763C25.3931 33.6787 25.492 33.4916 25.5727 33.3505C25.657 33.2099 25.807 32.9352 25.9111 32.743C26.0156 32.5509 26.1567 32.2837 26.2317 32.1571C26.4384 31.7868 26.6545 31.386 26.8341 31.0584C27.0244 30.6963 27.2204 30.3372 27.4219 29.9812C27.4823 29.864 27.5578 29.7412 27.5813 29.7102C27.6197 29.668 28.1742 29.6535 30.1795 29.6624L32.7248 29.6769L32.7389 33.8099C32.7483 37.0654 32.7614 37.9373 32.8092 37.9373C32.8364 37.9316 33.0248 37.8234 33.2189 37.6879C33.4917 37.4976 33.6089 37.3804 33.7355 37.1643C34.0228 36.6735 34.8375 35.901 35.3831 35.6005C36.0462 35.2339 36.7594 34.9664 37.5 34.8065C38.2523 34.6471 38.4741 34.6237 40.1827 34.5627C43.3008 34.4549 43.762 34.4362 43.7859 34.4127C43.8005 34.4001 43.7588 34.2773 43.6964 34.1362C43.6308 34.0007 43.5183 33.748 43.4381 33.5798C43.1414 32.939 43.1414 32.7243 43.4527 32.4098C43.6636 32.1894 44.2088 31.9973 45.1463 31.8107C45.3005 31.7779 45.4945 31.7357 45.5728 31.7085C45.6539 31.6846 45.7523 31.6663 45.7945 31.6663C45.9136 31.6663 46.8492 31.4371 47.047 31.3621C47.183 31.3059 47.917 31.1465 48.7922 30.9777C49.1728 30.9027 50.1619 30.7068 50.9803 30.5418C51.4983 30.4396 52.0388 30.3313 52.1794 30.3037C52.3205 30.2765 52.5239 30.2343 52.6266 30.216C52.7306 30.1926 52.8661 30.163 52.9322 30.1537C52.9978 30.141 53.3278 30.0749 53.6625 30.0055C53.9135 29.9505 54.1657 29.9016 54.4191 29.8588C54.6553 29.8368 56.4295 29.4102 56.8378 29.2785C57.488 29.0676 57.6802 28.9837 58.0903 28.709C58.5314 28.409 58.6542 28.2459 59.0916 27.374C59.5772 26.4055 59.6466 26.2424 59.7839 25.8341C59.9948 25.1844 59.9817 24.9369 59.7127 24.6641C59.5238 24.4776 59.1192 24.2854 58.8244 24.2432C58.6031 24.2155 58.5736 24.2244 58.4658 24.3416C58.3997 24.4119 58.343 24.4959 58.343 24.5249C58.343 24.5671 58.268 24.7724 58.057 25.2777C58.0369 25.3293 57.9952 25.4554 57.9619 25.5576C57.9347 25.6621 57.8775 25.8069 57.8447 25.8857C57.7842 26.0169 57.7791 25.9935 57.8025 25.6293C57.8264 25.2684 57.8869 24.9646 58.0242 24.5048C58.0481 24.4171 58.0809 24.2671 58.0941 24.1734L58.1175 24.0046L57.6286 23.8091C57.12 23.5982 56.6817 23.4154 56.4295 23.3019C56.3433 23.271 56.1328 23.1866 55.9589 23.1205C55.7794 23.0549 55.5633 22.9705 55.4738 22.9284C55.3106 22.8561 55.1457 22.7878 54.9792 22.7235C54.6642 22.6007 53.5636 22.2271 52.6261 21.9323C52.0002 21.7403 51.3735 21.5513 50.7459 21.3651C50.5251 21.3089 50.3053 21.2482 50.0869 21.1832C50.0119 21.163 49.8267 21.1119 49.6856 21.0754C48.8578 20.8466 48.6422 20.7894 48.345 20.7051C48.1812 20.6579 48.0165 20.6142 47.8509 20.5738C47.7614 20.5518 47.5181 20.4951 47.3109 20.4435C46.9481 20.354 45.4284 20.0043 44.6044 19.8154L44.0166 19.6799C43.9125 19.6565 43.7259 19.6194 43.5938 19.5955C43.4658 19.5721 43.1981 19.5205 43.0041 19.4784C42.8119 19.4423 42.398 19.3612 42.0867 19.3101C41.7773 19.2552 41.4056 19.1896 41.2645 19.1657C39.9647 18.9313 39.877 18.9182 37.5473 18.6604C36.112 18.4973 34.1817 18.3599 33.7116 18.3838C33.6366 18.3838 33.2194 18.4021 32.7905 18.426ZM27.3506 20.7327C28.5938 21.1359 29.8022 21.6834 30.63 22.2177C31.2891 22.6429 32.1075 23.3221 32.3292 23.6259L32.4225 23.7524L32.2448 23.6826C32.1464 23.6404 31.9392 23.5513 31.7836 23.4759C30.9558 23.0915 30.8663 23.0601 30.8663 23.1444C30.8663 23.1665 31.0584 23.4759 31.2891 23.8218C31.5253 24.1734 31.7119 24.4827 31.7119 24.5109C31.7119 24.5343 31.6242 24.4959 31.5141 24.4209C31.0913 24.1312 30.0984 23.714 30.0422 23.7984C30.0277 23.8218 30.3328 24.2099 30.7252 24.6641C31.1095 25.1184 31.4302 25.5065 31.4302 25.536C31.4302 25.6054 31.3552 25.596 30.998 25.4643C30.63 25.3344 30.5367 25.3199 30.5367 25.4094C30.5367 25.4699 31.3313 26.541 31.6463 26.9109C31.7358 27.0135 31.807 27.1124 31.807 27.1359C31.807 27.2479 30.705 26.5321 29.925 25.9148C28.8094 25.0251 27.7313 23.8312 27.1641 22.8444C26.6967 22.0382 26.5373 21.6046 26.5373 21.1265C26.5373 20.8466 26.5505 20.7899 26.6545 20.6905C26.7155 20.6268 26.7919 20.5734 26.8195 20.5734C26.8467 20.5734 27.083 20.6451 27.3506 20.7327ZM42.2058 22.3991C42.6563 22.4798 43.2731 22.5862 43.5698 22.6391C43.8666 22.6907 44.2289 22.7507 44.37 22.7746C44.5111 22.8023 44.7122 22.8388 44.8167 22.8623C44.9198 22.8862 45.1228 22.9284 45.2639 22.9612C45.7289 23.0643 45.8423 23.0877 46.6041 23.2654C47.4225 23.4576 47.602 23.4941 47.8509 23.5452C48.0633 23.5874 48.2738 23.668 48.2738 23.7046C48.2738 23.7196 48.12 23.8091 47.9316 23.9062C47.5453 24.0984 47.4647 24.1129 45.8752 24.1734C44.7933 24.2193 44.2144 24.2062 43.687 24.1218C42.623 23.9577 42.0741 23.6591 41.6456 23.0127C41.4956 22.7929 41.3967 22.7268 41.0522 22.6391C40.9256 22.6007 40.732 22.5491 40.6294 22.5163C40.5248 22.4835 40.3472 22.4319 40.2338 22.3991C39.8948 22.3115 40.0875 22.2599 40.7705 22.2599C41.2406 22.2599 41.5706 22.2913 42.2058 22.3991ZM47.8655 28.9382C47.8269 28.9474 47.7868 28.9474 47.7483 28.9382C47.7155 28.9232 47.7389 28.9143 47.805 28.9143C47.8692 28.9143 47.8931 28.9237 47.8659 28.9377L47.8655 28.9382ZM47.6625 28.993C47.6625 29.0165 47.6077 29.0493 47.5359 29.0643C47.3897 29.1009 46.8164 29.2659 46.628 29.3259C46.5619 29.3498 46.3495 29.4159 46.1573 29.4712C45.6722 29.6118 44.4966 29.9943 44.1816 30.1171C43.5881 30.3421 42.195 31.0804 41.9991 31.2782C41.7061 31.5637 41.6161 31.8712 41.6602 32.4609C41.6728 32.7098 41.7061 33.0234 41.7352 33.1584C41.7919 33.4537 41.7586 33.5338 41.6456 33.3876C41.5322 33.2427 41.2922 32.7191 41.2223 32.4609C41.1839 32.3455 41.1422 32.1899 41.1183 32.1149C41.0339 31.8491 41.0667 31.5341 41.1989 31.3438C41.3766 31.071 42.0173 30.6369 42.7697 30.2765C43.1269 30.1026 44.1666 29.7468 45.1228 29.4669C45.315 29.4107 45.5273 29.3446 45.5934 29.3263C46.2708 29.0971 47.6625 28.8773 47.6625 28.993ZM32.7816 29.3076C32.7666 29.3207 32.7248 29.3263 32.6916 29.3113C32.6531 29.2987 32.6681 29.2841 32.7192 29.2841C32.7722 29.2785 32.7998 29.2935 32.7816 29.3076Z"
          fill="#F6FBF4"
        ></path>
        <path
          id="Vector_2"
          d="M22.9139 38.3589V41.6345H25.2577C27.0173 41.6345 27.6141 41.6204 27.6563 41.5782C27.7275 41.5079 27.7425 35.0832 27.6708 35.0832C27.6473 35.0832 27.6145 35.1198 27.5995 35.162C27.5808 35.2042 27.0684 36.0043 26.4567 36.94C25.4883 38.4193 25.2192 38.7798 25.2192 38.597C25.2192 38.5642 23.6152 36.061 23.205 35.4564C23.15 35.3781 23.1016 35.2955 23.0602 35.2093C23.0217 35.1381 22.9758 35.0828 22.9523 35.0828C22.9322 35.0828 22.9139 36.557 22.9139 38.3589Z"
          fill="#F6FBF4"
        ></path>
      </svg>
    </div>
  )
}