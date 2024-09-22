'use client';

import React, {useState, useEffect} from 'react';
import {fetchVideoTypeArray, fetchCharacterArray, fetchEngineArray} from 'utils/fetchVideoFilter';

interface SortandFilterProps {
  applySortFilter: (order: 'latest'|'oldest', filterType: string[], filterCharacter: string[], filterEngine: string[]) => void;
}

const SortandFilter: React.FC<SortandFilterProps> = ({applySortFilter}) => {
  const [order, setOrder] = useState<'latest' | 'oldest'>('latest');
  const [videoType, setVideoType] = useState<'all' | 'custom'>('all');
  const [allVideoType, setAllVideoType] = useState<string[]>([]);
  const [filterVideoType, setFilterVideoType] = useState<string[]>([]);
  const [choosedVideoType, setChoosedVideoType] = useState<string[]>([]);
  const [character, setCharacter] = useState<'all' | 'custom'>('all');
  const [allCharacter, setAllCharacter] = useState<string[]>([]);
  const [filterCharacter, setFilterCharacter] = useState<string[]>([]);
  const [choosedCharacter, setChoosedCharacter] = useState<string[]>([]);
  const [engine, setEngine] = useState<'all' | 'custom'>('all');
  const [allEngine, setAllEngine] = useState<string[]>([]);
  const [filterEngine, setFilterEngine] = useState<string[]>([]);
  const [choosedEngine, setChoosedEngine] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchType = async () => {
      const fetchVideoTypeSet = await fetchVideoTypeArray();
      if (fetchVideoTypeSet) {
        const typeList = fetchVideoTypeSet.map((newType) => newType.name);
        setAllVideoType(typeList);
      }
    };
    const fetchCharacter = async () => {
      const fetchCharacterSet = await fetchCharacterArray();
      if (fetchCharacterSet) {
        const characterList = fetchCharacterSet.map((newCharacter) => newCharacter.name);
        setAllCharacter(characterList);
      }
    };
    const fetchEngine = async () => {
      const fetchEngineSet = await fetchEngineArray();
      if (fetchEngineSet) {
        const engineList = fetchEngineSet.map((newEngine) => newEngine.name);
        setAllEngine(engineList);
      }
    };
    fetchType();
    fetchCharacter();
    fetchEngine();
  }, []);
  useEffect(() => {
    if (allVideoType) {
      setFilterVideoType(allVideoType);
      setChoosedVideoType(allVideoType);
    }
    if (allCharacter) {
      setFilterCharacter(allCharacter);
      setChoosedCharacter(allCharacter);
    }
    if (allEngine) {
      setFilterEngine(allEngine);
      setChoosedEngine(allEngine);
    }
  }, [allVideoType, allCharacter, allEngine]);
  
  const VideoTypeChange = (how: string) => {
    if (how === 'all') {
      setVideoType('all');
      setFilterVideoType(allVideoType);
    }
    else if (how === 'custom') {
      setVideoType('custom');
      setFilterVideoType(choosedVideoType);
    }
  }
  const handleFilterVideoTypeChange = (type: string) => {
    const updatedFilterVideoType = filterVideoType.includes(type) ? filterVideoType.filter(item => item !== type) : [...filterVideoType, type];
    setChoosedVideoType(updatedFilterVideoType);
    setFilterVideoType(updatedFilterVideoType);
  };
  const CharacterChange = (how: string) => {
    if (how === 'all') {
      setCharacter('all');
      setFilterCharacter(allCharacter);
    }
    else if (how === 'custom') {
      setCharacter('custom');
      setFilterCharacter(choosedCharacter);
    }
  }
  const handleFilterCharacterChange = (name: string) => {
    const updatedFilterCharacter = filterCharacter.includes(name) ? filterCharacter.filter(item => item !== name) : [...filterCharacter, name];
    setChoosedCharacter(updatedFilterCharacter);
    setFilterCharacter(updatedFilterCharacter);
  };
  const EngineChange = (how: string) => {
    if (how === 'all') {
      setEngine('all');
      setFilterEngine(allEngine);
    }
    else if (how === 'custom') {
      setEngine('custom');
      setFilterEngine(choosedEngine);
    }
  }
  const handleFilterEngineChange = (name: string) => {
    const updatedFilterEngine = filterEngine.includes(name) ? filterEngine.filter(item => item !== name) : [...filterEngine, name];
    setChoosedEngine(updatedFilterEngine);
    setFilterEngine(updatedFilterEngine);
  };
  const handleApply = () => {
    applySortFilter(order, filterVideoType, filterCharacter, filterEngine);
  };

  return (
    <div className="border w-4/5 mx-auto mb-4 rounded border-slate-500">
      <div className="text-2xl text-center py-4">
        <h5>Sort & Filter Video List</h5>
      </div>
      <div className="grid md:w-4/5 mx-auto grid-cols-2 md:grid-cols-4 justify-items-center">
        <fieldset className="py-2">
          <legend>Sort by Date</legend>
          <div className="px-4">
            <input type="radio" id="latest" name="sort" value="Latest" checked={order==='latest'} onChange={() => setOrder('latest')} />
            <label className="px-2" htmlFor="latest">Latest</label>
          </div>
          <div className="px-4">
            <input type="radio" id="oldest" name="sort" value="Oldest" checked={order==='oldest'} onChange={() => setOrder('oldest')} />
            <label className="px-2" htmlFor="oldest">Oldest</label>
          </div>
        </fieldset>
        <fieldset className="py-2">
          <legend>Filter by Video Type</legend>
          <div className="px-4">
            <input type="radio" id="all-video-type" name="video-type" value="All" checked={videoType==='all'} onChange={() => VideoTypeChange('all')} />
            <label className="px-2" htmlFor="all-video-type">All</label>
          </div>
          <div className="px-4">
            <input type="radio" id="custom-video-type" name="video-type" value="Custom" checked={videoType==='custom'} onChange={() => VideoTypeChange('custom')} />
            <label className="px-2" htmlFor="custom-video-type">Custom</label>
            {allVideoType.map((name) =>
            <div key={name} className="px-4">
              <input type="checkbox" id={name} name={name} checked={choosedVideoType.includes(name)} disabled={videoType==='all'} onChange={() => handleFilterVideoTypeChange(name)} />
              <label className="px-2" htmlFor={name}>{name}</label>
            </div>
            )}
          </div>
        </fieldset>
        <fieldset className="py-2">
          <legend>Filter by Character</legend>
          <div className="px-4">
            <input type="radio" id="all-character" name="character" value="All" checked={character==='all'} onChange={() => CharacterChange('all')} />
            <label className="px-2" htmlFor="all-character">All</label>
          </div>
          <div className="px-4">
            <input type="radio" id="custom-character" name="character" value="Custom" checked={character==='custom'} onChange={() => CharacterChange('custom')} />
            <label className="px-2" htmlFor="custom-type">Custom</label>
            {allCharacter.map((name) =>
            <div key={name} className="px-4">
              <input type="checkbox" id={name} name={name} checked={choosedCharacter.includes(name)} disabled={character=='all'} onChange={() => handleFilterCharacterChange(name)} />
              <label className="px-2" htmlFor={name}>{name}</label>
            </div>
            )}
          </div>
        </fieldset>
        <fieldset className="py-2">
          <legend>Filter by Engine</legend>
          <div className="px-4">
            <input type="radio" id="all-engine" name="engine" value="All" checked={engine==='all'} onChange={() => EngineChange('all')} />
            <label className="px-2" htmlFor="all-engine">All</label>
          </div>
          <div className="px-4">
            <input type="radio" id="custom-engine" name="engine" value="Custom" checked={engine==='custom'} onChange={() => EngineChange('custom')} />
            <label className="px-2" htmlFor="custom-type">Custom</label>
            {allEngine.map((name) =>
            <div key={name} className="px-4">
              <input type="checkbox" id={name} name={name} checked={choosedEngine.includes(name)} disabled={engine=='all'} onChange={() => handleFilterEngineChange(name)} />
              <label className="px-2" htmlFor={name}>{name}</label>
            </div>
            )}
          </div>
        </fieldset>
      </div>
      <div className="grid mx-auto justify-items-center">
        <button type="button" className="px-3 py-2 mb-4 bg-blue-500 text-white rounded shadow-md" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
}

export default SortandFilter;
