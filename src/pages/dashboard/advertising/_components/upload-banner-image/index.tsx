import { forwardRef, useRef, ChangeEvent, HTMLProps } from "react";
import { MdCloudUpload } from "react-icons/md";

type Props = {
  filename?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  image?: string;
} & HTMLProps<HTMLInputElement>;

export const UploadBannerImage = forwardRef<HTMLInputElement, Props>(
  ({ filename = "", image, onChange, ...rest }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: ".75rem",
            alignItems: "center",
          }}
          className="w-[100px] h-[100px] tablet:w-[300px] tablet:h-[330px]"
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              gap: ".1563rem",
              borderRadius: "28px",
              cursor: "pointer",
              height: "100%",
            }}
            className="border border-red-500 border-dashed"
          >
            <div
              style={{
                flex: 1,
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
              onClick={() => {
                if (inputRef.current && !filename) inputRef.current.click();
              }}
            >
              {image !== "" ? (
                <img
                  style={{
                    objectFit: "cover",
                    borderRadius: "28px",
                    width: "100%",
                    height: "100%",
                    
                  }}
                  src={image}
                />
              ) : (
                <div className="flex flex-col gap-1 items-center h-full justify-center">
                  <MdCloudUpload size={30} className="text-red-500" />
                  <h1 className="font-bold text-zinc-900 text-md hidden tablet:block">
                    Faça o upload da iamgem
                  </h1>
                  <p className="text-zinc-500 text-sm text-center hidden tablet:block">
                    Arraste a imagem desejada para a criação do banner
                  </p>
                </div>
              )}
             
            </div>
          </div>

          <input
            ref={inputRef}
            style={{ display: "none" }}
            type="file"
            accept="image/png, image/jpeg"
            onChange={onChange}
            {...rest}
          />
        </div>
      </div>
    );
  }
);
