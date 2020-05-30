import React, { Fragment, useContext, useEffect } from 'react';
import CaseItem from './CaseItem';
import {CircularProgress,Typography, IconButton, SvgIcon} from '@material-ui/core';
import CaseContext from '../../context/Case/CaseContext';
import { ReactComponent as LungSvg } from '../../img/lungs.svg';
import { ReactComponent as BrainSvg } from '../../img/cns.svg';
import { ReactComponent as HeartSvg } from '../../img/heart.svg';
import { ReactComponent as GitSvg } from '../../img/git.svg';

const Cases = React.memo(() => {
  const caseContext = useContext(CaseContext);
  
     useEffect(() => {
  
      getCases();
  
      // eslint-disable-next-line
      }, []);

 

  const { cases, errors, filtered, getCases, loading } = caseContext;
  
  if (cases !== null && cases.length === 0 && !loading) {
    return <h5>No Cases!</h5>
  }
let ABDCases
let RESCases
let MULTICases
let MUSCases
let CNSCases
let CVSCases
  if(cases !== null && cases.length > 0){  
      ABDCases = cases.filter(caSe => caSe.system === 'ABD')
      CNSCases = cases.filter(caSe => caSe.system === 'CNS')
      CVSCases = cases.filter(caSe => caSe.system === 'CVS')
      MULTICases = cases.filter(caSe => caSe.system === 'MULTI')
      MUSCases = cases.filter(caSe => caSe.system === 'MUS')
      RESCases = cases.filter(caSe => caSe.system === 'RES')
    }
    

return (
  
    <Fragment>
      {cases !== null && !loading ? (
        <>
        {errors&& errors.auth &&(<div>Unauthorized</div>)}
        {filtered && filtered.map(caSe =>(
         <CaseItem key={caSe.id} caSe={caSe}/>
         ))
        } 
        
        {ABDCases.length>0 &&  (<div>
          <IconButton>
            <SvgIcon component= {GitSvg} fontSize='large' color='primary' viewBox="0 0 1280.000000 1199.000000"/>
          <Typography variant="h5" gutterBottom>ABD</Typography> 
          </IconButton>
           {ABDCases.map(caSe =>(
         
         <CaseItem key={caSe.id} caSe={caSe}/>
         ))
        }  
          </div>)
        }
        {CNSCases.length>0 &&  (<div>
          
          <IconButton>
            <SvgIcon component= {BrainSvg} fontSize='large' color='primary' viewBox="0 0 1280.000000 1088.000000"/>
          <Typography variant="h5" gutterBottom>CNS</Typography> 
          </IconButton>
           {CNSCases.map(caSe =>(
         <CaseItem key={caSe.id} caSe={caSe}/>
         ))
        }  
          </div>)
        }
        {CVSCases.length>0 &&  (<div>
          <IconButton>
            <SvgIcon component= {HeartSvg} fontSize='large' color='primary' viewBox="0 0 1000 1000"/>
          <Typography variant="h5" gutterBottom>CARDIO</Typography> 
          </IconButton>
           {CVSCases.map(caSe =>(
         
         <CaseItem key={caSe.id} caSe={caSe}/>
         ))
        }  
          </div>)
        }
        {RESCases.length>0 &&  (<div>
          <IconButton>
            <SvgIcon component= {LungSvg} fontSize='large' color='primary' viewBox="0 0 511.984 511.984"/>
          <Typography variant="h5" gutterBottom>RESP</Typography> 
          </IconButton>
           {RESCases.map(caSe =>(
         
         <CaseItem key={caSe._id} caSe={caSe}/>
         ))
        }  
          </div>)
        }
        {MULTICases.length>0 &&  (<div>
        <IconButton>
          <SvgIcon/>
        <Typography variant="h5" gutterBottom> MUS</Typography>
        </IconButton>
           {MULTICases.map(caSe =>(
         
         <CaseItem key={caSe.id} caSe={caSe}/>
         ))
        }  
          </div>)
        }
        {MUSCases.length>0 &&  (<div>
          <IconButton>
            <SvgIcon/>
          <Typography variant="h5" gutterBottom> MUS</Typography> 
          </IconButton>
           {MUSCases.map(caSe =>(
         
         <CaseItem key={caSe.id} caSe={caSe}/>
         ))
        }  
          </div>)
        }
        {filtered !== null
        ? filtered.map(caSe =>(
          <CaseItem key={caSe.id} caSe={caSe}/> 
        ))
        :ABDCases.map(caSe => (
          <CaseItem key={caSe.id} caSe={caSe}/> 
       ))  
       ?CNSCases.map(caSe => (
        <CaseItem key={caSe.id} caSe={caSe}/> 
     ))  
     :RESCases.map(caSe => (
      <CaseItem key={caSe.id} caSe={caSe}/> 
     ))   
    ? CVSCases.map(caSe => (
      <CaseItem key={caSe.id} caSe={caSe}/> 
     )) 
    :MULTICases.map(caSe => (
    <CaseItem key={caSe.id} caSe={caSe}/> 
    )) 
    ?MUSCases.map(caSe => (
      <CaseItem key={caSe.id} caSe={caSe}/> 
    )) 
    :cases.map(caSe => (
      <CaseItem key={caSe.id} caSe={caSe}/> 
    ))               
        }
        </>
        ) 
        : (
        <CircularProgress />
      )}
    </Fragment>
  );
});

export default Cases;
