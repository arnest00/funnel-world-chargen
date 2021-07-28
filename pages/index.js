import Head from 'next/head';
import Layout from '../components/layout';
import Button from '../components/button';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Funnel World Villager Generator</title>
      </Head>
        <Button 
          action='Muster Villager'
        />

        <section>
          <p>Name: <span id="name"></span></p>
          <p>Level: 0</p>
          <p>XP: 0</p>
          <p>Occupation: <span id="job"></span></p>
          <p>Gender: <span id="gender"></span></p>
          <p>Traits: <span id="traits"></span></p>
          <p>Alignment: Undeclared</p>

          <table>
            <tbody>
              <tr>
                <td>Strength</td>
                <td><span id="str"></span></td>
                <td>STR</td>
                <td><span className="mod"></span></td>
              </tr>
              <tr>
                <td>Dexterity</td>
                <td><span id="dex"></span></td>
                <td>DEX</td>
                <td><span className="mod"></span></td>
              </tr>
              <tr>
                <td>Constitution</td>
                <td><span id="con"></span></td>
                <td>CON</td>
                <td><span className="mod"></span></td>
              </tr>
              <tr>
                <td>Intelligence</td>
                <td><span id="int"></span></td>
                <td>INT</td>
                <td><span className="mod"></span></td>
              </tr>
              <tr>
                <td>Wisdom</td>
                <td><span id="wis"></span></td>
                <td>WIS</td>
                <td><span className="mod"></span></td>
              </tr>
              <tr>
                <td>Charisma</td>
                <td><span id="cha"></span></td>
                <td>CHA</td>
                <td><span className="mod"></span></td>
              </tr>
            </tbody>
          </table>

          <p>Armor 0</p>
          <p>HP <span id="hp">Constitution/4, rounded up</span></p>
          <p>Damage d4</p>
          <p>Load <span id="load">STR+4</span></p>
          <p>Bond: <span id="bond"></span></p>
          <p>Gear: <span id="gear"></span></p>
          <p>Starting Moves: Know Your Stuff<span id="move"></span></p>
        </section>
    </Layout>
  );
};
