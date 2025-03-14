import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '@/config/firebase';

const ParticipantManagement = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterYear, setFilterYear] = useState('');
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [departments, setDepartments] = useState([
    'Computer Science',
    'Islamic Finance',
    'BBA',
    'English',
  ]);
  const [years, setYears] = useState([
   'First Year',
    'Second Year',
    'Third Year',
  ]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('Computer Science');
  const [year, setYear] = useState('Second Year');
  const [team, setTeam] = useState('')
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    fetchParticipants();
    fetchFiltersData();
  }, []);

  const fetchFiltersData = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'participants'));
      const uniqueDepartments = new Set();
      const uniqueYears = new Set();
      
      // snapshot.docs.forEach(doc => {
      //   const data = doc.data();
      //   if (data.department) uniqueDepartments.add(data.department);
      //   if (data.year) uniqueYears.add(data.year);
      // });
      
      // setDepartments([...uniqueDepartments].sort());
      // setYears([...uniqueYears].sort());
    } catch (error) {
      console.error('Error fetching filter data:', error);
    }
  };

  const fetchParticipants = async (isLoadMore = false) => {
    try {
      setLoading(true);
      let participantsQuery = query(
        collection(db, 'participants'),
        orderBy('name'),
        limit(20)
      );
      if (filterDepartment) {
        participantsQuery = query(
          collection(db, 'participants'),
          where('department', '==', filterDepartment),
          orderBy('name'),
          limit(20)
        );
      }
      if (filterYear) {
        participantsQuery = query(
          collection(db, 'participants'),
          where('year', '==', filterYear),
          orderBy('name'),
          limit(20)
        );
      }
      if (filterDepartment && filterYear) {
        participantsQuery = query(
          collection(db, 'participants'),
          where('department', '==', filterDepartment),
          where('year', '==', filterYear),
          orderBy('name'),
          limit(20)
        );
      }
      if (isLoadMore && lastVisible) {
        participantsQuery = query(participantsQuery, startAfter(lastVisible));
      }
      const participantsSnapshot = await getDocs(participantsQuery);
      if (participantsSnapshot.docs.length < 20) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
      const lastVisibleDoc = participantsSnapshot.docs[participantsSnapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);
      const participantsList = participantsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      if (isLoadMore) {
        setParticipants(prev => [...prev, ...participantsList]);
      } else {
        setParticipants(participantsList);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching participants:', error);
      setLoading(false);
    }
  };

  const handleCreateParticipant = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'participants'), {
        name,
        department,
        year,
        team,
        totalPoints
      });
      setName('');
      setDepartment('');
      setYear('');
      setTotalPoints(0);
      fetchParticipants();
    } catch (error) {
      console.error('Error adding participant:', error);
    }
  };

  const updateDepartment = (value) => {
    setDepartment(value)
    if (value === 'Computer Science'){
      setTeam('BSC')
    }
    else if (value === 'Islamic Finance'){
      setTeam('Bvoc')
    }
  
  else if (value === 'BBA'){
    setTeam('COMMERCE')
  }

else if (value === 'English'){
  setTeam('ARTS')
}
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Create Participant</h2>
      <form onSubmit={handleCreateParticipant} className="mb-6 space-y-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="w-full px-4 py-2 border rounded-md text-white" />
        <select value={department} onChange={(e) => updateDepartment(e.target.value)} required className="w-full px-4 py-2 border rounded-md text-white">
          <option value="">Select Department</option>
          {departments.map((dept, index) => <option key={index} value={dept}>{dept}</option>)}
        </select>
        <input disabled={true} value={team} className='text-white w-full px-4 py-2 border rounded-md text-white' placeholder="Team Name" />
        <select value={year} onChange={(e) => setYear(e.target.value)} required className="w-full px-4 py-2 border rounded-md text-white">
          <option value="">Select Year</option>
          {years.map((yr, index) => <option key={index} value={yr}>{yr}</option>)}
        </select>
        {/* <input type="number" value={totalPoints} onChange={(e) => setTotalPoints(Number(e.target.value))} placeholder="Total Points" className="w-full px-4 py-2 border rounded-md" /> */}
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Create</button>
      </form>
    </div>
  );
};

export default ParticipantManagement;