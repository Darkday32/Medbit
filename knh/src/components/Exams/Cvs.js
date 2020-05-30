import React from 'react'
import System from './System'
const Cvs = () => {
 
 const hpiList=[
   'cough','haemoptysis','dyspnoea','hoarseness','wheeze','night-sweats','Chest pain'
 ]
const pInspection=[]
const gInspection=[
  'Scars','Cyanosis','Oxygen, inhalers,nebulizers','SOB','Symmetry','General state',
  
]
const section='Front and Back of Chest'
const pastList=[
  'pneumonia/bronchitis',
  'TB,atopy',
  'lung surgery',
  'connective tissue disorders, neurological disorders',
  'previous CXR abonormalities',
]
const drugSocialList=[
  'brochodilators,steroids,ACE-i,Amiodarone','Empysema,TB,Atopy',
'Occupational exposure,Pets,Recent Travel,Contacts,Smoking'
]
const hands=[
  'Tobacco Staining','Peripheral cyanosis','Rheumatoid Arthritis','Clubbing'
  ,'Aterixis',
]
const pulses=[
  'Radial Pulse:Bounding CO2 retention','Respiratory rate and pattern','Blood Pressure',

]
const neck=[
  'Tracheal deviation','Tracheal tug','Lymphadenopathy','JVP:raised Copulmonale,Fixed:SVC Obstruction'
]
const face=[
  'Horners','Central Cyanosis','pursed lips','Conjuctival Pallor'
]
const palpation=[
  'Expansion:Upper and lower chest','Apex Beat','Tactile vocal fremitus','Percussion:left vs right',

]
const ascultate=[
  'Respiratory segments comparing L/R','Vocal resonance.Whispering pectoriloquy:consolidation'
]
const complete =[
  'Sacral and ankle oedema','Peripheral pulses','02 saturation','Sputum pot','PEFR'
]
const percussion=[]

  return (
   <System
    hpiList={hpiList}
    complete={complete}
    ascultate={ascultate}
    palpation={palpation}
    hands={hands}
    face={face}
    neck={neck}
    drugSocialList={drugSocialList}
    pastList={pastList}
    section={section}
    pInspection={pInspection}
    gInspection={gInspection}
    pulses={pulses}
    percussion={percussion}
   />
  )
}
export default Cvs