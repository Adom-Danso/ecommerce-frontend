import { ThreeDot, OrbitProgress } from 'react-loading-indicators';
import {DarkBackground, AdminDarkBackground} from './DarkBackground'

export const LoadingIndicator = () => {
  return (
    <DarkBackground>
      <ThreeDot
          variant="bounce"
          color="#facc15"
          size="medium"
          text="Loading..."
          textColor="#facc15"
        />
    </DarkBackground>
  );
};

export const AdminLoadingIndicator = () => {
  return (
    <AdminDarkBackground>
      <ThreeDot
          variant="bounce"
          color="#facc15"
          size="medium"
          text="Loading..."
          textColor="#facc15"
        />
    </AdminDarkBackground>
  );
};

export const SpinningIndicator = () => {
  return (
    <div className="flex justify-center">
      <svg className="animate-spin"
        fill="#FFFFFF" 
        width="25" 
        height="25" 
        version="1.1" 
        id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 26.349 26.35" 
        xmlSpace="preserve">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <g> 
            <g> 
              <circle cx="13.792" cy="3.082" r="3.082"></circle> 
              <circle cx="13.792" cy="24.501" r="1.849"></circle> 
              <circle cx="6.219" cy="6.218" r="2.774"></circle> 
              <circle cx="21.365" cy="21.363" r="1.541"></circle> 
              <circle cx="3.082" cy="13.792" r="2.465"></circle> 
              <circle cx="24.501" cy="13.791" r="1.232"></circle> 
              <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05 C6.902,18.996,5.537,18.988,4.694,19.84z"></path> 
              <circle cx="21.364" cy="6.218" r="0.924"></circle> 
            </g> 
          </g> 
        </g>
      </svg>
    </div>
  );
};

