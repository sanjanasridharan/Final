import React,{createContext,Component} from 'react'

export const CheckStatus=createContext();

class CheckStatusProvider extends Component{
    state={
        currentLevel:1,
        open:false,
        activeStep:0
    }
    afterModal=(props)=>
    {
        this.setState({activeStep:this.state.activeStep+1,currentLevel:props})
       
        console.log(this.state.currentLevel+" check")
    }
    
    // setLevel=(props)=>{
    //     this.setState({currentLevel:props})
    //     console.log(props+"context api")
    // }
    handleChange = () => {
        this.setState({open:!this.state.open});
        console.log(this.state.open)
      };
   
    render(){
        return(
            <CheckStatus.Provider value={{currentLevel:this.state.currentLevel,setLevel:this.setLevel,open:this.state.open,handleChange:this.handleChange,activeStep:this.state.activeStep,afterModal:this.afterModal}}>
                {this.props.children}
            </CheckStatus.Provider>
        )
    }
}
export default CheckStatusProvider