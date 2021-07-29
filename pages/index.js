import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Button from '../components/button';
import styles from '../styles/Home.module.css';
import { getCharacter } from '../utils/getCharacter';

export default function Home() {
  const [ newChar, setNewChar ] = useState({});

  const handleClick = () => {
    const rolledChar = getCharacter();

    setNewChar(rolledChar);
  };

  return (
    <Layout>
      <Head>
        <title>Funnel World Villager Generator</title>
      </Head>
        <div className={styles.buttonContainer}>
          <Button 
            action='Muster Villager' 
            handleClick={handleClick}
          />
        </div>

        {!newChar.abilities ? (
          <section>
            <p>Press the button to generate a new character!</p>
          </section>
        ) : (
          <section>
            <p>Name: {newChar.name}</p>
            <p>Level: 0</p>
            <p>XP: 0</p>
            <p>Occupation: {newChar.job}</p>
            <p>Gender: {newChar.gender}</p>
            <p>Traits: {newChar.traits}</p>
            <p>Alignment: Undeclared</p>

            <table>
              <tbody>
                <tr>
                  <td>Strength</td>
                  <td>{newChar.abilities[0].score}</td>
                  <td>STR</td>
                  <td>{newChar.abilities[0].mod}</td>
                </tr>
                <tr>
                  <td>Dexterity</td>
                  <td>{newChar.abilities[1].score}</td>
                  <td>DEX</td>
                  <td>{newChar.abilities[1].mod}</td>
                </tr>
                <tr>
                  <td>Constitution</td>
                  <td>{newChar.abilities[2].score}</td>
                  <td>CON</td>
                  <td>{newChar.abilities[2].mod}</td>
                </tr>
                <tr>
                  <td>Intelligence</td>
                  <td>{newChar.abilities[3].score}</td>
                  <td>INT</td>
                  <td>{newChar.abilities[3].mod}</td>
                </tr>
                <tr>
                  <td>Wisdom</td>
                  <td>{newChar.abilities[4].score}</td>
                  <td>WIS</td>
                  <td>{newChar.abilities[4].mod}</td>
                </tr>
                <tr>
                  <td>Charisma</td>
                  <td>{newChar.abilities[5].score}</td>
                  <td>CHA</td>
                  <td>{newChar.abilities[5].mod}</td>
                </tr>
              </tbody>
            </table>

            <p>Armor 0</p>
            <p>HP {newChar.hp}</p>
            <p>Damage d4</p>
            <p>Load {newChar.load}</p>
            <p>Bond: {newChar.bond ? newChar.bond : ''}</p>
            <p>Gear: {newChar.gear ? newChar.gear : ''}</p>
            <p>Starting Moves: Know Your Stuff{newChar.move ? `, ${newChar.move}` : ''}</p>
          </section>
        )}
    </Layout>
  );
};
