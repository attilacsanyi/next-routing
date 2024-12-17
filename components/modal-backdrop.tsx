"use client";

import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const router = useRouter();

  return <div onClick={router.back} className="modal-backdrop"></div>;
};

export default ModalBackdrop;
