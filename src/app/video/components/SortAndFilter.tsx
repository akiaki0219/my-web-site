"use client";

import React, {useState, useEffect} from 'react';
import {fetchVideoTypeArray, fetchCharacterArray, fetchEngineArray} from 'utils/fetchVideoFilter';

interface SortandFilterProps {
  applySortFilter: (order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[], filterEngine: string[]) => void;
}

const SortandFilter: React.FC<SortandFilterProps> = ({applySortFilter}) => {
  const [order, setOrder] = useState<'latest' | 'oldest'>('latest');
  const [videoType, setVideoType] = useState<string[]>([]);
  const [character, setCharacter] = useState<string[]>([]);
  const [engine, setEngine] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [filterCharacter, setFilterCharacter] = useState<string[]>([]);
  const [filterEngine, setFilterEngine] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchType = async () => {
      const fetchVideoTypeSet = await fetchVideoTypeArray();
      if (fetchVideoTypeSet) {
        const typeList = fetchVideoTypeSet.map((newType) => newType.name);
        setVideoType(typeList);
      }
    };
    const fetchCharacter = async () => {
      const fetchCharacterSet = await fetchCharacterArray();
      if (fetchCharacterSet) {
        const characterList = fetchCharacterSet.map((newCharacter) => newCharacter.name);
        setCharacter(characterList);
      }
    };
    const fetchEngine = async () => {
      const fetchEngineSet = await fetchEngineArray();
      if (fetchEngineSet) {
        const engineList = fetchEngineSet.map((newEngine) => newEngine.name);
        setEngine(engineList);
      }
    };
    fetchType();
    fetchCharacter();
    fetchEngine();
  }, []);
  useEffect(() => {
    if (videoType) {
      setFilterType(videoType);
    }
    if (character) {
      setFilterCharacter(character);
    }
    if (engine) {
      setFilterEngine(engine);
    }
  }, [videoType, character, engine]);
  
  const handleFilterTypeChange = (type: string) => {
    const updatedFilterType = 
      filterType.includes(type)
        ? filterType.filter(item => item !== type)
        : [...filterType, type];
    setFilterType(updatedFilterType);
  };
  const handleFilterCharacterChange = (name: string) => {
    const updatedFilterCharacter = 
      filterCharacter.includes(name)
        ? filterCharacter.filter(item => item !== name)
        : [...filterCharacter, name];
    setFilterCharacter(updatedFilterCharacter);
  };
  const handleFilterEngineChange = (name: string) => {
    const updatedFilterEngine = 
      filterEngine.includes(name)
        ? filterEngine.filter(item => item !== name)
        : [...filterEngine, name];
    setFilterEngine(updatedFilterEngine);
  };
  const handleApply = () => {
    applySortFilter(order, filterType, filterCharacter, filterEngine);
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
          <legend>Filter by Type</legend>
          {videoType.map((name) =>
            <div key={name} className="px-4">
              <input type="checkbox" id={name} name={name} checked={filterType.includes(name)} onChange={() => handleFilterTypeChange(name)} />
              <label className="px-2" htmlFor={name}>{name}</label>
            </div>
          )}
        </fieldset>
        <fieldset className="py-2">
          <legend>Filter by Character</legend>
          {character.map((name) =>
            <div key={name} className="px-4">
              <input type="checkbox" id={name} name={name} checked={filterCharacter.includes(name)} onChange={() => handleFilterCharacterChange(name)} />
              <label className="px-2" htmlFor={name}>{name}</label>
            </div>
          )}
        </fieldset>
        <fieldset className="py-2">
          <legend>Filter by Engine</legend>
          {engine.map((name) =>
            <div key={name} className="px-4">
              <input type="checkbox" id={name} name={name} checked={filterEngine.includes(name)} onChange={() => handleFilterEngineChange(name)} />
              <label className="px-2" htmlFor={name}>{name}</label>
            </div>
          )}
        </fieldset>
      </div>
      <div className="grid mx-auto justify-items-center">
        <button type="button" className="px-3 py-2 mb-4 bg-blue-500 text-white rounded shadow-md" onClick={handleApply}>Apply</button>
      </div>
    </div>
  );
}

export default SortandFilter;
