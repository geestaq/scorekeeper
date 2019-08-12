import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const players = [
    {
        name: 'Kunegunda',
        score: 0
    },
  ];

  const appComponent = shallow(<App />);

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);

  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(5);
});

it('should add a player', () => {

  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const playersAfterAdd = appComponent.state('players');

  expect(playersAfterAdd[0].name).toEqual('Ania');
  expect(playersAfterAdd.length).toEqual(1);
  expect(playersAfterAdd[0].score).toEqual(0);
});

it('should remove a player', () => {
  const players = [
    {
        name: 'Kunegunda',
        score: 5
    },
    {
        name: 'Bolek',
        score: 0
    },
  ];

  const appComponent = shallow(<App />);
  appComponent.setState({ players });

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove(0);

  const playersAfterRemove = appComponent.state('players');

  expect(playersAfterRemove[0].name).toEqual('Bolek');
  expect(playersAfterRemove.length).toEqual(1);
  expect(playersAfterRemove[0].score).toEqual(0);
});
