import ProfileCardInfoBox from './components/ProfileCardInfoBox,jsx/ProfileCardInfoBox'
import SrOnly from './components/SrOnly/SrOnly'
import ProfileCardUser from './components/profileCardUser/profileCardUser'
import ProfileEdit from './components/profileEdit/profileEdit'





function App(){
  return (
    <>
    <SrOnly>이듬엔터 프로필 수정</SrOnly>
    <ProfileEdit/>
    <ProfileCardUser/>
    <ProfileCardInfoBox/>
    </>
  )
}

export default App
