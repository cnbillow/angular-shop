export function Emoji(){
    return (target:object,key:string)=>{
        let val = target[key];
        const getter = () =>{
            return val;
        }
        const setter = (value:string) =>{
            val = `~~${value}~~`
        }
        Object.defineProperty(target,key,{
            get:getter,
            set:setter,
            enumerable:true,
            configurable:true
        })
    }
}

// export function Confirmable(mesage:string){
//     return (target:object,key:string,descriptor:ParameterDecorator)=>{
//         const original = descriptor.value;
//         descriptor.value = function()
//     }
// }