import userData from '../../data/users.json';

export default function ProfileCardInfo(){
    const {items} = userData
    const children = items.map(({id, name, job, email})=>{
        return(
           <li className="profileCard-layout">
            <span className="font-semibold text-[14px]">{name}</span>
            <span data-field="username" className="rendering-box text-base text-Contents-contentSecondary">미입력</span>
            </li>
           
        )
    })
    return children

}