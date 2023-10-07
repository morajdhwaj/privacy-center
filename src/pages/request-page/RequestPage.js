import React, { useState } from 'react';
import './_request-page.scss';
import { Button, Checkbox, ComboBox, Dropdown, TextInput } from '@carbon/react';

const requestHead = [
  {
    id: 0,
    langName: 'English',
    langCode: 'EN',
    data: [
      {
        heading1: 'Welcome to the Opt-Out Webform!',
        heading2: 'Why Did You Reach This Page?',
        heading3: 'Country of Residence',
        heading4: 'Your are',
        heading5: 'Email',
        heading6: 'Contact',
        heading7: ' Im not a robot',
        heading8: 'Submit',
        heading9: 'Thank you',
        desc1:
          'Your data privacy & security are important to us. To understand how we collect and use your personal data when delivering our services, you can read our Privacy Policy.',
        desc2:
          'Our algorithm scans many data sources on a daily basis. To prevent your contact details (emails and phone numbers) to be added to ourdatabase we ask you to provide us with these details so we can add them to a suppression list',
        desc3:
          ' Lusha will use the information you provide within this form to verify that you are the holder of the relevant email, and identify your information to fulfil your request..',

        desc4:
          ' The information you provide in this form is processed by Lusha Systems Inc. (“Lusha”) for our legitimate interest to enable our users and individuals in our database to control their personal data and/or, as applicable depending on the country you have provided above, to comply with laws providing specific privacy/data protection rights to individuals.',

        desc5:
          ' Lusha will retain this information for the duration necessary to process your request. When your request is fulfilled, we will archive this information for 7 years, in order to comply with our legal and contractual obligations or to protect ourselves from any potential disputes (as required by laws applicable to record-keeping and to have proof and evidence concerning our relationship, e.g. should any legal issues arise following the termination of your account), all in accordance with our Data Retention Policy.',

        desc6:
          'Lusha will use the information you provide within this form to verify that you are the holder of the relevant email, and identify your information to fulfil your request.',

        type: [
          {
            id: 'option-0',
            text: 'Owner',
          },
          {
            id: 'option-1',
            text: 'User',
          },
          {
            id: 'option-2',
            text: 'Customer',
          },
        ],
        items: [
          {
            id: 'option-0',
            text: 'I received  SMS notice',
          },
          {
            id: 'option-1',
            text: 'Too many sales calls',
          },
          {
            id: 'option-2',
            text: 'Found my email on your online directory',
          },
          {
            id: 'option-3',
            text: 'Found my phone on your online directory',
          },
          {
            id: 'option-4',
            text: 'Download all my data',
          },
          {
            id: 'option-5',
            text: 'Delete all my data ',
          },
          {
            id: 'Do not contact',
            text: 'Found my phone on your online directory',
          },
        ],
        country: [
          {
            id: 'option-0',
            text: 'India',
          },
          {
            id: 'option-1',
            text: 'America',
          },
          {
            id: 'option-2',
            text: 'China',
          },
          {
            id: 'option-3',
            text: 'Russia',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    langName: 'हिन्दी',
    langCode: 'HI',
    data: [
      {
        heading1: 'ऑप्ट-आउट वेबफ़ॉर्म में आपका स्वागत है!',
        heading2: 'आप इस पृष्ठ पर क्यों पहुंचे',
        heading3: 'निवास का देश',
        heading4: 'आप हैं',
        heading5: 'ईमेल',
        heading6: 'संपर्क',
        heading7: 'में रोबोट नहीं हूँ',
        heading8: 'जमा',
        heading9: 'धन्यवाद',

        desc1:
          'आपकी डेटा गोपनीयता और सुरक्षा हमारे लिए महत्वपूर्ण है। यह समझने के लिए कि हम अपनी सेवाएँ प्रदान करते समय आपका व्यक्तिगत डेटा कैसे एकत्र और उपयोग करते हैं, आप हमारी गोपनीयता नीति पढ़ सकते हैं।',
        desc2:
          'हमारा एल्गोरिदम दैनिक आधार पर कई डेटा स्रोतों को स्कैन करता है। आपके संपर्क विवरण (ईमेल और फ़ोन नंबर) को हमारे डेटाबेस में जोड़े जाने से रोकने के लिए हम आपसे ये विवरण प्रदान करने के लिए कहते हैं ताकि हम उन्हें दमन सूची में जोड़ सकें',
        desc3:
          'लुशा इस फॉर्म में आपके द्वारा प्रदान की गई जानकारी का उपयोग यह सत्यापित करने के लिए करेगी कि आप प्रासंगिक ईमेल के धारक हैं, और आपके अनुरोध को पूरा करने के लिए आपकी जानकारी की पहचान करेगी।',

        desc4:
          'इस फॉर्म में आपके द्वारा प्रदान की गई जानकारी हमारे वैध हित के लिए लुशा सिस्टम्स इंक ("लुशा") द्वारा संसाधित की जाती है ताकि हमारे डेटाबेस में हमारे उपयोगकर्ताओं और व्यक्तियों को उनके व्यक्तिगत डेटा को नियंत्रित करने और/या, आपके द्वारा प्रदान किए गए देश के आधार पर लागू होने में सक्षम बनाया जा सके। उपरोक्त, व्यक्तियों को विशिष्ट गोपनीयता/डेटा सुरक्षा अधिकार प्रदान करने वाले कानूनों का अनुपालन करना।',

        desc5:
          ' लुशा आपके अनुरोध को संसाधित करने के लिए आवश्यक अवधि तक इस जानकारी को बनाए रखेगी। जब आपका अनुरोध पूरा हो जाता है, तो हम अपने कानूनी और संविदात्मक दायित्वों का पालन करने के लिए या किसी भी संभावित विवाद से खुद को बचाने के लिए (जैसा कि रिकॉर्ड रखने के लिए लागू कानूनों द्वारा आवश्यक है और संबंधित सबूत और सबूत रखने के लिए) इस जानकारी को 7 वर्षों के लिए संग्रहीत करेंगे। हमारे संबंध, उदाहरण के लिए यदि आपके खाते की समाप्ति के बाद कोई कानूनी समस्या उत्पन्न होती है), तो यह सब हमारी डेटा अवधारण नीति के अनुसार होगा।',

        desc6:
          ' लुशा इस फॉर्म में आपके द्वारा प्रदान की गई जानकारी का उपयोग यह सत्यापित करने के लिए करेगी कि आप प्रासंगिक ईमेल के धारक हैं, और आपके अनुरोध को पूरा करने के लिए आपकी जानकारी की पहचान करेगी।',

        type: [
          {
            id: 'option-0',
            text: 'मालिक',
          },
          {
            id: 'option-1',
            text: 'उपयोगकर्ता',
          },
          {
            id: 'option-2',
            text: 'ग्राहक',
          },
        ],

        items: [
          {
            id: 'option-0',
            text: 'मुझे एसएमएस नोटिस मिला',
          },
          {
            id: 'option-1',
            text: 'बहुत अधिक बिक्री कॉल',
          },
          {
            id: 'option-2',
            text: 'आपकी ऑनलाइन निर्देशिका पर मेरा ईमेल मिला',
          },
          {
            id: 'option-3',
            text: 'मेरा फ़ोन आपकी ऑनलाइन निर्देशिका पर मिला',
          },
          {
            id: 'option-4',
            text: 'मेरा सारा डेटा डाउनलोड करें',
          },
          {
            id: 'option-5',
            text: 'मेरा सारा डेटा हटा दें ',
          },
          {
            id: 'Do not contact',
            text: 'मेरा फ़ोन आपकी ऑनलाइन निर्देशिका पर मिला',
          },
        ],
        country: [
          {
            id: 'option-0',
            text: 'भारत',
          },
          {
            id: 'option-1',
            text: 'अमेरिका',
          },
          {
            id: 'option-2',
            text: 'चीन',
          },
          {
            id: 'option-3',
            text: 'रूस',
          },
        ],
      },
    ],
  },
];

const RequestPage = () => {
  const [langId, setLangId] = useState(0);

  const handleLang = (e) => {
    setLangId(e.selectedItem.id);
  };

  console.log(langId);

  console.log(requestHead[1]);

  return (
    <div className='request'>
      <div className='request-1'>
        <Dropdown
          id='default'
          initialSelectedItem={requestHead[0]}
          label='0'
          items={requestHead}
          itemToString={(item) => (item ? item.langName : '')}
          className='dpar-web-drop'
          onChange={handleLang}
        />
      </div>
      {requestHead[langId].data.map((head) => {
        return (
          <div className='request-page'>
            <div className='request-page-div1'>
              <h3 className='request-page-div1-h'>{head.heading1}</h3>
              <p className='request-page-div1-p'>{head.desc1}</p>
              <p className='request-page-div1-p'>{head.desc2}</p>
              <p className='request-page-div1-p'>{head.desc3}</p>
            </div>
            <div className='request-page-div2'>
              <h3 className='request-page-div2-h'>{head.heading2}</h3>
              <ComboBox
                onChange={() => {}}
                id='carbon-combobox'
                items={head.items}
                downshiftProps={{
                  onStateChange: () => {
                    console.log('the state has changed');
                  },
                }}
                itemToString={(item) => (item ? item.text : '')}
                className='request-page-div2-ComboBox'
              />
              <h3 className='request-page-div2-h'> {head.heading3}</h3>
              <Dropdown
                id='default'
                initialSelectedItem={head.country[0]}
                label='Option 1'
                items={head.country}
                itemToString={(item) => (item ? item.text : '')}
                className='request-page-div2-ComboBox'
              />
              <h3 className='request-page-div2-h'> {head.heading4}</h3>
              <Dropdown
                id='default'
                initialSelectedItem={head.type[0]}
                label='Option 1'
                items={head.type}
                itemToString={(item) => (item ? item.text : '')}
                className='request-page-div2-ComboBox'
              />
              <h3 className='request-page-div2-h'> {head.heading5}</h3>
              <TextInput
                id='email'
                type='email'
                className='request-page-div2-ComboBox'
              />
              <h3 className='request-page-div2-h'>{head.heading6}</h3>
              <TextInput
                id='number'
                type='number'
                className='request-page-div2-ComboBox'
              />
              <div className='request-page-div2-div'>
                <Checkbox labelText={head.heading7} id='checkbox-label-1' />
                <Button>{head.heading8}</Button>
              </div>
            </div>
            <img src='./images/send-email.png' alt='' />
            <div className='request-page-div3'>
              <h3 className='request-page-div3-h'>{head.heading9}</h3>
              <p className='request-page-div3-p'>{head.desc4}</p>
              <p className='request-page-div3-p'>{head.desc5}</p>
              <p className='request-page-div3-p'>{head.desc6}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RequestPage;
