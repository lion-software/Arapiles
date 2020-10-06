import React from "react";
import PrimaryLayout from "../layouts/primaryLayout";
import {Divider, PageHeader} from "antd";

import styles from "./faq.module.css"

const FAQ = () => {
  return(
    <PrimaryLayout>
      <PageHeader
        title="FAQ"
        onBack={() => window.history.back()}
      />

      <Divider orientation="left"><h1 className={styles.question}>How does the club run?</h1></Divider>
      <p>The club is a volunteer-run organisation which is affiliated with UQ sport. It is essential that as a
member you give back to the UQMC community, if you learn to climb with us please help us pass the
knowledge onto the new member. Without a cycle of giving back and passing your experience on
our club is not sustainable. If your not keen be apart of the community and just want to learn to
climb, we would suggest you check out the courses our friend at Pinnacle Sports offer.</p>

      <Divider orientation="left"><h1 className={styles.question}>I don’t know anything about climbing, can I still join?</h1></Divider>
      <p>Yes. We have a community that will help you learn the skills you need to know to climb safely. We
do not offer any formal certificates, and our volunteers are not outdoor guides; however, our
activity leaders have vertical rescue and first aid Check out our “tape system” to see the skills
progression program the club uses.</p>

      <Divider orientation="left"><h1 className={styles.question}>I don’t have any climbing gear can I still come?</h1></Divider>
      <p>Yes. Your membership fees go towards having essential gear so that new members have access to
the equipment they need. However, we do suggest that as you progress thought the club, you buy
your climbing equipment (harness, shoes, personal safeties, e.t.c.) and if your keen to climb ofter
your rope and gear. Having your gear will be super helpful when you want to organise your own trip
with the new friend you met because life-critical club gear (i.e. climbing equipment) cannot be
borrowed it only allowed to be used on club trips where members are under the supervision of
activity leaders and experienced members.</p>

      <Divider orientation="left"><h1 className={styles.question}>What climbing activities does the club run?</h1></Divider>
      <ul>
        <li>Top-roping at Kangaroo Point Cliffs on Tuesdays and Thursday nights during the UQ
semester, set up at 5 pm and climbing at 6pm, pack up by 9pm;</li>
        <li>Lead workshops at Kangaroo Point throughout the semester;</li>
        <li>Weekend leading and seconding trips to crags including Pages, Mossie Wall, Andrometer
etc;</li>
        <li>Bouldering Trips to Toohey forest and White Rock;</li>
        <li>During Mid-semester or long weekends, we often run trips up to Brooyar or out to
Pashandale State forest</li>
        <li>End of the semester the club has a Blueys trip.</li>
      </ul>

      <Divider orientation="left"><h1 className={styles.question}>What hiking trips does the club run?</h1></Divider>
      <ul>
        <li>This is highly variable and dependent on what the hiking community wants to do;</li>
        <li>It is not unusual to have weekend hiking trip at local, national parks in South East
Queensland;</li>
        <li>On long weekend or during semester holiday there are sometime multiday hiking trips
organised;</li>
        <li>The club has hiking packs, cooking equipment, sleeping bags and everything you need to do
multiday hiking, and this can be borrowed and used on your adventures as it is not life-
critical equipment.</li>
      </ul>

        <Divider orientation="left"><h1 className={styles.question}>Is there anything else the club does?</h1></Divider>
      <p>On weekend trips and at KP you might see the club slackline come out.</p>

    </PrimaryLayout>
  );
};

export default FAQ;
