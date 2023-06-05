import Image from "next/image";

export default function LoadingIndicator() {
  return (
    <div className="width-5 height-5">
      <svg
        className="animate-spin h-5 w-5 mr-3 bg-orange-400 rounded"
        viewBox="0 0 24 24"
      ></svg>
    </div>
  );
}
