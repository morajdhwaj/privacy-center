import React, { useState } from 'react';
import './_contents.scss';
import { Dropdown } from '@carbon/react';

const items = [
  {
    id: '0',
    text: 'English',
    code: 'en',
    data: [
      {
        description:
          'The aim of this policy is to describe how and why we collect your personal data. We will also inform you of what we do with this data, with whom we share it, how we protect it and the choices you can make.',
      },
    ],
  },
  {
    id: '1',
    text: 'हिंदी',
    code: 'hi',
    data: [
      {
        description:
          'इस नीति का उद्देश्य आपके व्यक्तिगत डेटा को कैसे और क्यों एकत्र करते हैं, इसे हम किसके साथ साझा करते हैं, हम इसे कैसे सुरक्षित रखते हैं और आपके पास क्या विकल्प हैं, इसे वर्णन करना है।',
      },
    ],
  },
  {
    id: '2',
    text: 'বাংলা',
    code: 'bn',
    data: [
      {
        description:
          'এই নীতির উদ্দেশ্য আপনার ব্যক্তিগত ডেটা কীভাবে এবং কেন আমরা সংগ্রহ করি তা বর্ণনা করা। আমরা এই ডেটা দিয়ে আমরা কি করি, সে সম্পর্কে আপনাকে জানিয়ে দিব।',
      },
    ],
  },
  {
    id: '3',
    text: 'मराठी',
    code: 'mr',
    data: [
      {
        description:
          'या धोरणाचा उद्देश आहे कि आपला वैयक्तिक माहिती कसे आणि कसे आणि का संग्रहित करतो तो सांगणार. आम्ही हे डेटा आपल्याला कसे वापरतो, त्याच्या संगणक सह कसे सांघतो, आम्ही तो कसे संरक्षित करतो आणि आपल्याला काही निवडण्याच्या अधिकाराचे कसे आहे हे आपल्याला सांगितले आहे.',
      },
    ],
  },
  {
    id: '4',
    text: 'தமிழ்',
    code: 'ta',
    data: [
      {
        description:
          'இந்த கொள்கையின் லக்ஷம் உங்கள் கணினி தரகர்கள் எப்படி மற்றும் எப்படி உங்கள் தனிப்பட்ட தரவை சேகரிக்கின்றன என்று விளக்க உத்தேசிப்பது. இந்த தரவை நாங்கள் எப்படி பயன்படுத்துகின்றோம், அது யாருடன் பகிர்ந்து, அதை எப்படி பாதுகாப்பிப்பது மற்றும் உங்கள் வாரியாக அமைந்துள்ள விருப்பங்களை உங்களுக்கு விளக்குகின்றது.',
      },
    ],
  },
  {
    id: '5',
    text: 'తెలుగు',
    code: 'te',
    data: [
      {
        description:
          'ఈ విధానం అయినా, మీ వైయక్తిక డేటాను ఎలా మరియు ఎందుకు సంగ్రహిస్తున్నాము అని వివరిస్తుంది. మేము ఈ డేటాను మనం ఎలా వాడుతున్నాము, అది ఎవరితో పంచుతామని కూడా చెప్పమని, అది ఎలా సంరక్షించామని, మరియు మీరు ఏ ఆయనకం చేయవచ్చు అని మీరు ఎంచుకోగలరు.',
      },
    ],
  },
  {
    id: '6',
    text: 'ગુજરાતી',
    code: 'gu',
    data: [
      {
        description:
          'આ નીતિનો ઉદ્દેશ એ છે કે તમારી વ્યક્તિગત માહિતી કેવી રીતે અને માટે અને તમે શોધો છો છો, અમે તેને કયે છીએ અને તેની સાથે અમે શેર કરીએ છીએ, તેને અમે કેવી રીતે સુરક્ષિત રાખીએ છીએ અને તમે કયું વિકલ્પ કરી શકો છો, તેને વર્ણન કરવો.',
      },
    ],
  },
  {
    id: '7',
    text: 'ಕನ್ನಡ',
    code: 'kn',
    data: [
      {
        description:
          'ಈ ನೀತಿಯ ಉದ್ದೇಶ್ಯವೇನೆಂದರೆ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾವನ್ನು ಹೇಗೆ ಮತ್ತು ಯಾಕೆ ನಾವು ಸಂಗ್ರಹಿಸುತ್ತೇವೆ ಎಂದು ವಿವರಿಸುವುದು. ನಾವು ಈ ಡೇಟಾವನ್ನು ನಾವು ಅದನ್ನು ಹೇಗೆ ಬಳಸುತ್ತೇವೆ ಯಾರೊಂದಿಗೆ ಹಂಚುತ್ತೇವೆ, ಅದನ್ನು ಹೇಗೆ ಸಂರಕ್ಷಿಸುತ್ತೇವೆ ಮತ್ತು ನೀವು ಯಾವ ಆಯ್ಕೆಗಳನ್ನು ಮಾಡಬಹುದು ಎಂದು ನಿಮಗೆ ತಿಳಿಸುತ್ತೇವೆ.',
      },
    ],
  },
];

const Contents = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleSelect = (event) => {
    console.log(event, 'event');
    const selectedItemId = event.selectedItem.id;
    setSelectedItem(event.selectedItem.id);
    console.log(selectedItemId);
  };

  console.log(selectedItem, 'iddd');

  return (
    <div className='contents'>
      <div className='contents-div1'></div>
      <div className='contents-div2'>
        <div className='contents-div2-div1'>
          <h2 className='contents-div2-h'>External Privacy Policy</h2>
          <Dropdown
            id='default'
            initialSelectedItem={selectedItem}
            label={items[0].text}
            items={items}
            itemToString={(item) => (item ? item.text : '')}
            className='contents-div2-d'
            onChange={handleSelect}
          />
        </div>
        {items[selectedItem]?.data?.map((data) => (
          <div key={data}>
            <p className='contents-div2-p'>{data.description}</p>
            <p className='contents-div2-p'>
              {data.description} {data.description}
            </p>
            <p className='contents-div2-p'>{data.description}</p>
            <p className='contents-div2-p'>{data.description}</p>
            <p className='contents-div2-p'>
              {data.description}
              {data.description}
              {data.description}
            </p>
            <p className='contents-div2-p'>{data.description}</p>
            <p className='contents-div2-p'></p>
          </div>
        ))}
      </div>
      <div className='contents-div3'></div>
    </div>
  );
};

export default Contents;
