import React from 'react'
import System from './System'
const Abd = () => {
 
 const hpiList=[
   'Abdominal pain','haematemesis','dysphagia','Jaundice','Appetite','Distention:5Fs','Melaena','Rectal bleeding',
 'Indigestion/dyspepsia/reflux','Change in bowel habit','Diarrhoea/Constipation','Upper GI bledding','Vomiting:ABCDEFGHI'
  ]
const pInspection=[
  'scars','Masses','Pulsations','Veins PH','Gynecomastia','Hair loss',
]
const gInspection=[
  'Scars','jaundiced','Oxygen, Vomit bags,stoma bags','BMI','Symmetry','General state','urine color','catheter',
  
]
const section='Abdomen'
const pastList=[
  'pud',
  'jaundice,carcinoma',
  'hepatitis',
  'tattos,blood transfusions',
  'LMP,dietary changes',
]
const drugSocialList=[
  'steroids,NSAIDS,Anticoagulants:Clopidogrel','Pud,polyps',
'Occupational exposure,sexual history,Recent Travel,IBS,IBD','smoking/Alcohol/Drug use','Tropical illneses','Contact with jaundiced Persons'
]
const hands=[
  'Tobacco Staining','Peripheral cyanosis','Dupuytren’s contracture','Clubbing','Muehrcke’s lines, palmar erythema',' koilonychia, leuconychia',
  'Aterixis',
]
const pulses=[
  'Radial Pulse:Bounding CO2 retention','Respiratory rate and pattern','Blood Pressure','spider-naevi','pigmentation','AV fistulae'

]
const neck=[
  'Tracheal deviation','Tracheal tug','Lymphadenopathy','JVP:raised Copulmonale,Portal HT,Fixed:SVC Obstruction','scars:tunnelled hamodialysis lines'
]
const face=[
  'sunked eyes','Kayser-Fleischer rings','Central Cyanosis','jaundice lips','Conjuctival Pallor',
' Angular, stomatitis','pigmentation, telangiectasia','ulcers, glossitis',
]
const palpation=[
  ' Light palpation: pain, rebound tenderness,guarding','Deep palpation: masses','Liver: margin','Spleen:Enlarged/size','Kidneys:Palpable?','Aorta:Expansile?',
  
]
const percussion=[
'Liver:upper/lower border','Spleen:To mid axillary line','Bladder:dull?','Ascites:shifting dullness'
]
const ascultate=[
  'Bowel sounds:Below umbilicus','Bruits:Midline above umbilicus',
]
const complete =[
  'Sacral and ankle oedema','hernial orifices','external genitalia','DRE','Dipstick urine'
]

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
export default Abd