import ProfileCardInfo from "../profileCardInfo/profileCardInfo";


export default function ProfileCardInfoBox(){
    return (
        <div className="profileCard-area-info bg-background">
        <ul className="flex flex-col gap-4 pt-3">
            <li className="profileCard-layout flex justify-between pt-3">
            <p data-field="nickName" className="rendering-box font-extrabold">
                별명을 등록해주세요
            </p>
            <div className="profile-user-avatar w-[1.5rem] h-[1.5rem] rounded-full overflow-hidden">
                <img className="rendering-photo w-full h-full object-cover border bodrer-gray-100" data-field="avatar" src="/src/assets/popcorn.png" alt="프로필 사진" />
            </div>
            </li>
            <ProfileCardInfo/>
        </ul>
        </div>

    )
}