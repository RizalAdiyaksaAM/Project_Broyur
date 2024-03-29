import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUserrr } from "../../redux/action/auth/authRegister";
import { ToastContainer, toast } from "react-toastify";

export const Daftar = () => {
  const navigate = useNavigate();
  const [nama, setnama] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("PEMBELI");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = async () => {
    const success = await dispatch(
      RegisterUserrr({
        nama: nama,
        email: email,
        role: role,
        password: password,
      })
    );

    if (success) {
      toast.success("Akun berhasil dibuat");
      navigate("/");
    } else {
      toast.warning("Email telah digunakan atau input belum terisi semua");
    }
  };
  return (
    <div>
      <Button onPress={onOpen} className="z-10 text-base border-2 font-semibold text-white border-primaryhijau bg-primaryhijau">
        Daftar
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="mb-[10%]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center items-center gap-1 text-[#315818] font-bold ">Daftar</ModalHeader>
              <ToastContainer />
              <ModalBody>
                <div className="w-full flex flex-col justify-center items-center ">
                  <div className="flex flex-col mb-[2rem] space-y-4 ">
                    <div>
                      <p>Nama</p>
                      <input onChange={(e) => setnama(e.target.value)} id="nama" className="w-[20rem] rounded-xl mt-1 border-2 border-[#D0D0D0] pl-4 py-1 " placeholder="Masukkan Nama" type="text" />
                    </div>
                    <div>
                      <p>Email</p>
                      <input onChange={(e) => setemail(e.target.value)} id="email" className="w-[20rem] rounded-xl mt-1 border-2 border-[#D0D0D0] pl-4 py-1 " placeholder="Masukkan Email" type="email" />
                    </div>
                    <div className="relative">
                      <p>Password</p>
                      <input
                        id="password"
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                        className="w-[20rem] rounded-xl mt-1 border-2 border-[#D0D0D0] pl-4 py-1"
                        placeholder="Masukkan Password"
                        type={showPassword ? "text" : "password"}
                      />
                      <span className="absolute bottom-2 right-4 " onClick={showpass}>
                        {showPassword ? (
                          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512">
                            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512">
                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                          </svg>
                        )}
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={() => {
                      registerUser();
                    }}
                    className="px-[7rem] bg-[#315818] text-white font-semibold "
                  >
                    Daftar
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
