
interface String {
    texto:string

}


export const Hello = (props:String) =>{

return(
    <div 
    className='Hello'
    style={{
        background:'rgba(1,1,1,1)',
        color:'white',
        height:'100vh'
    }}>
        <div>
            Hello Word
        </div>
    </div>


)

}