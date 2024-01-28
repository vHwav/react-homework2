
export default function ProfileEdit(){
    return (
        <>
        <div className="profileCard-edit  flex justify-between w-full py-4 px-5 bg-background">
            <span>프로필 수정</span>
            <button className="profileCard-button-close">
                <img src="/public/images/close.svg" alt="닫힘버튼" />
            </button>
        </div>
        <h2 className="flex items-center gap-0.5 px-2">
        프로필카드
        <span title="유저 정보란입니다">
            <img src="/public/images/information.svg" alt="정보" />
        </span>
        </h2>
      </>

    )
}
