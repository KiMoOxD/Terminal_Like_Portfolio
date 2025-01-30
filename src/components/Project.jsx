import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Project({
  imageSrc,
  strLink,
  ghLink,
  title,
  description,
}) {
  return (
    <div>
      <div className="group relative block h-64 sm:h-80 lg:h-96">
        <span className="absolute inset-0 border-2 border-dashed border-green-600"></span>

        <div className="relative flex h-full transform items-end border-2 border-green-600 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="transition-opacity group-hover:absolute group-hover:opacity-0 w-full h-full">
            <LazyLoadImage
              alt={title}
              effect="blur" // You can choose different effects like 'blur', 'opacity', etc.
              src={imageSrc}
              width="100%"
              height="100%"
              className="object-cover"
            />
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 text-start">
            <h3 className="mt-4 text-lg md:text-xl font-medium sm:text-2xl">
              {title}
            </h3>

            <p className="mt-4 text-xs md:text-sm sm:text-base">
              {description}
            </p>

            <div className="mt-8 flex gap-5">
              <a href={ghLink} className="underline">
                Github
              </a>
              {strLink && (
                <a href={strLink} className="underline">
                  Streamlit
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
