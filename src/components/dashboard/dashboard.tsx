// src/pages/Dashboard.tsx
import { useState } from 'react';
import { 
  FiCalendar, 
  FiClock, 
  FiFolder, 
  FiFile,
  FiChevronRight,
  FiAlertCircle
} from 'react-icons/fi';
import { format, isSameMonth, isAfter, isBefore, addMonths } from 'date-fns';
import { DashboardProps } from './types';
import { CalendarContent, CalendarDate, CalendarItem, CalendarItems, CalendarRecurrence, CalendarSection, CalendarSubtitle, CalendarTitle, DashboardContainer, DashboardGrid, DashboardHeader, EmptyState, EmptyStateText, MonthButton, MonthDisplay, MonthNavigation, RecentContent, RecentInfo, RecentItem, RecentItems, RecentSection, RecentSubtitle, RecentTitle, SectionHeader, SectionTitle, StatCard, StatIcon, StatInfo, StatLabel, StatsGrid, StatValue, StyledLink, UpcomingContent, UpcomingDate, UpcomingItem, UpcomingItems, UpcomingSection, UpcomingSubtitle, UpcomingTitle } from './styled';


const Dashboard: React.FC<DashboardProps> = ({ 
  binders, 
  recentSections,
  updateRecentSections 
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Get all sections with due dates
  const allSections = binders.flatMap(binder => 
    binder.sections
      .filter(section => section.dueDate !== null)
      .map(section => ({
        ...section,
        binderId: binder.id,
        binderName: binder.name
      }))
  );
  
  // Get sections due in the current month
  const sectionsInCurrentMonth = allSections.filter(
    section => section.dueDate && isSameMonth(section.dueDate, currentMonth)
  );
  
  // Get upcoming due dates for the next 3 months
  const upcomingDueDates = allSections.filter(
    section => section.dueDate && 
    isAfter(section.dueDate, new Date()) && 
    isBefore(section.dueDate, addMonths(new Date(), 3))
  ).sort((a, b) => a.dueDate!.getTime() - b.dueDate!.getTime());
  
  // Navigate to previous month
  const handlePrevMonth = () => {
    setCurrentMonth(prev => addMonths(prev, -1));
  };
  
  // Navigate to next month
  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };
  
  // Get total counts
  const totalBinders = binders.length;
  const totalSections = binders.reduce((acc, binder) => acc + binder.sections.length, 0);
  const totalFiles = binders.reduce(
    (acc, binder) => acc + binder.sections.reduce(
      (sAcc, section) => sAcc + section.files.length, 0
    ), 0
  );
  
  return (
    <DashboardContainer>
      <DashboardHeader>
        <h1>Dashboard</h1>
      </DashboardHeader>
      
      <StatsGrid>
        <StatCard>
          <StatIcon>
            <FiFolder />
          </StatIcon>
          <StatInfo>
            <StatValue>{totalBinders}</StatValue>
            <StatLabel>Binders</StatLabel>
          </StatInfo>
        </StatCard>
        
        <StatCard>
          <StatIcon>
            <FiFolder />
          </StatIcon>
          <StatInfo>
            <StatValue>{totalSections}</StatValue>
            <StatLabel>Sections</StatLabel>
          </StatInfo>
        </StatCard>
        
        <StatCard>
          <StatIcon>
            <FiFile />
          </StatIcon>
          <StatInfo>
            <StatValue>{totalFiles}</StatValue>
            <StatLabel>Files</StatLabel>
          </StatInfo>
        </StatCard>
      </StatsGrid>
      
      <DashboardGrid>
        <CalendarSection>
          <SectionHeader>
            <SectionTitle>
              <FiCalendar />
              <h2>Due Dates Calendar</h2>
            </SectionTitle>
            <MonthNavigation>
              <MonthButton onClick={handlePrevMonth}>&lt;</MonthButton>
              <MonthDisplay>{format(currentMonth, 'MMMM yyyy')}</MonthDisplay>
              <MonthButton onClick={handleNextMonth}>&gt;</MonthButton>
            </MonthNavigation>
          </SectionHeader>
          
          {sectionsInCurrentMonth.length > 0 ? (
            <CalendarItems>
              {sectionsInCurrentMonth.map(section => (
                <CalendarItem key={section.id}>
                  <CalendarDate>
                    {section.dueDate && format(section.dueDate, 'd')}
                  </CalendarDate>
                  <CalendarContent>
                    <CalendarTitle>{section.name}</CalendarTitle>
                    <CalendarSubtitle>{section.binderName}</CalendarSubtitle>
                    <CalendarRecurrence>
                      {section.recurrence ? `Recurs: ${section.recurrence}` : 'No recurrence'}
                    </CalendarRecurrence>
                    <StyledLink 
                      to={`/binder/${section.binderId}/section/${section.id}`}
                      onClick={() => updateRecentSections(section.binderId, section.id)}
                    >
                      View Section <FiChevronRight />
                    </StyledLink>
                  </CalendarContent>
                </CalendarItem>
              ))}
            </CalendarItems>
          ) : (
            <EmptyState>
              <FiAlertCircle />
              <EmptyStateText>No due dates for this month</EmptyStateText>
            </EmptyState>
          )}
        </CalendarSection>
        
        <RecentSection>
          <SectionHeader>
            <SectionTitle>
              <FiClock />
              <h2>Recently Viewed</h2>
            </SectionTitle>
          </SectionHeader>
          
          {recentSections.length > 0 ? (
            <RecentItems>
              {recentSections.map(section => (
                <RecentItem key={section.id}>
                  <RecentContent>
                    <RecentTitle>{section.name}</RecentTitle>
                    <RecentSubtitle>{section.binderName}</RecentSubtitle>
                    <RecentInfo>
                      {section.files.length} file{section.files.length !== 1 ? 's' : ''}
                      {section.dueDate && (
                        <span> • Due: {format(section.dueDate, 'MMM d, yyyy')}</span>
                      )}
                    </RecentInfo>
                    <StyledLink 
                      to={`/binder/${section.binderId}/section/${section.id}`}
                      onClick={() => updateRecentSections(section.binderId, section.id)}
                    >
                      View Section <FiChevronRight />
                    </StyledLink>
                  </RecentContent>
                </RecentItem>
              ))}
            </RecentItems>
          ) : (
            <EmptyState>
              <FiAlertCircle />
              <EmptyStateText>No recently viewed sections</EmptyStateText>
            </EmptyState>
          )}
        </RecentSection>
        
        <UpcomingSection>
          <SectionHeader>
            <SectionTitle>
              <FiCalendar />
              <h2>Upcoming Due Dates</h2>
            </SectionTitle>
          </SectionHeader>
          
          {upcomingDueDates.length > 0 ? (
            <UpcomingItems>
              {upcomingDueDates.slice(0, 5).map(section => (
                <UpcomingItem key={section.id}>
                  <UpcomingDate>
                    {section.dueDate && (
                      <>
                        <span className="month">{format(section.dueDate, 'MMM')}</span>
                        <span className="day">{format(section.dueDate, 'd')}</span>
                      </>
                    )}
                  </UpcomingDate>
                  <UpcomingContent>
                    <UpcomingTitle>{section.name}</UpcomingTitle>
                    <UpcomingSubtitle>{section.binderName}</UpcomingSubtitle>
                    <StyledLink 
                      to={`/binder/${section.binderId}/section/${section.id}`}
                      onClick={() => updateRecentSections(section.binderId, section.id)}
                    >
                      View Section <FiChevronRight />
                    </StyledLink>
                  </UpcomingContent>
                </UpcomingItem>
              ))}
            </UpcomingItems>
          ) : (
            <EmptyState>
              <FiAlertCircle />
              <EmptyStateText>No upcoming due dates</EmptyStateText>
            </EmptyState>
          )}
        </UpcomingSection>
      </DashboardGrid>
    </DashboardContainer>
  );
};


export default Dashboard;