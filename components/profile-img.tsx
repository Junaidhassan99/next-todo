import Image from "next/image";

export default function ProfileImg() {
  return (
    <Image
      className="rounded-full border-4 border-gray-500 inline-block shadow-md"
      src="/images/person.jpg"
      alt="profile-img"
      width={70}
      height={70}
    />
  );
}
