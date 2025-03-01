// src/pages/SectionView.tsx
import { useState, useRef, FormEvent } from 'react';
import { 
  FiArrowLeft,
  FiCalendar,
  FiRefreshCw,
  FiUpload,
  FiFile,
  FiDownload,
  FiTrash2,
  FiAlertCircle,
  FiClock,
  FiSave,
  FiMessageSquare,
  FiSend
} from 'react-icons/fi';
import { format } from 'date-fns';
import { SectionViewProps } from './types';
import { 
  BackLink, 
  Button, 
  CategoryOption, 
  CategorySelector, 
  CloseButton, 
  CommentCategoryBadge, 
  CommentDate, 
  CommentForm, 
  CommentFormTitle, 
  CommentHeader, 
  CommentItem, 
  CommentsList, 
  CommentsSection, 
  CommentsSectionHeader, 
  CommentText, 
  CommentTextarea, 
  DatePickerBody, 
  DatePickerContent, 
  DatePickerFooter, 
  DatePickerHeader, 
  DatePickerModal, 
  DueDateCard, 
  DueDateIcon, 
  DueDateInfo, 
  DueDateLabel, 
  DueDateValue, 
  EmptyState, 
  EmptyStateText, 
  FileActionButton, 
  FileActions, 
  FileNameCell, 
  FilesSection, 
  FilesSectionHeader, 
  FilesTable, 
  FilesTableCell, 
  FilesTableHeader, 
  FilesTableRow, 
  FormGroup, 
  FormInput, 
  FormLabel, 
  FormSelect, 
  LastOpenedInfo, 
  RecurrenceCard, 
  RecurrenceIcon, 
  RecurrenceInfo, 
  RecurrenceLabel, 
  RecurrenceValue, 
  SectionDetailsRow, 
  SectionHeader, 
  SectionTitle, 
  SectionViewContainer, 
  SubmitButton, 
  UploadButton, 
  UploadCard, 
  UploadIcon, 
  UploadInfo, 
  UploadLabel, 
  UploadValue 
} from './styled';
import { Navigate, useParams } from 'react-router-dom';
import { CommentCategory, RecurrenceType } from '../../types';

const SectionView: React.FC<SectionViewProps> = ({ 
  binders, 
  updateSectionDueDate,
  uploadFile,
  addComment
}) => {
  const { binderId, sectionId } = useParams<{ binderId: string; sectionId: string }>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dueDate, setDueDate] = useState<string>('');
  const [recurrence, setRecurrence] = useState<RecurrenceType>(null);
  
  // Comment form state
  const [commentText, setCommentText] = useState('');
  const [commentCategory, setCommentCategory] = useState<CommentCategory>('general');
  
  // Find the binder and section
  const binder = binders.find(b => b.id === binderId);
  if (!binder) return <Navigate to="/" replace />;
  
  const section = binder.sections.find(s => s.id === sectionId);
  if (!section) return <Navigate to={`/binder/${binderId}`} replace />;
  
  // Initialize the due date and recurrence from section data
  useState(() => {
    if (section.dueDate) {
      setDueDate(format(section.dueDate, 'yyyy-MM-dd'));
    }
    if (section.recurrence) {
      setRecurrence(section.recurrence);
    }
  });
  
  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && binderId && sectionId) {
      uploadFile(binderId, sectionId, e.target.files[0]);
    }
  };
  
  // Trigger file input click
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // Get file icon based on file type
  const getFileIcon = (fileType: string) => {
    return <FiFile />;
  };
  
  // Format file size
  const formatFileSize = (size: number) => {
    if (size < 1024) {
      return `${size} B`;
    } else if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    } else {
      return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    }
  };
  
  // Save due date and recurrence
  const handleSaveDueDate = () => {
    if (binderId && sectionId) {
      const newDueDate = dueDate ? new Date(dueDate) : null;
      updateSectionDueDate(binderId, sectionId, newDueDate, recurrence);
      setShowDatePicker(false);
    }
  };
  
  // Get recurrence options
  const recurrenceOptions: RecurrenceType[] = [
    null,
    '3 year',
    'annual',
    'monthly',
    'quarterly',
    'per occurrence',
    'per policy',
    'quinquennially',
    'semi annual',
    'sexennial',
    'weekly'
  ];
  
  return (
    <SectionViewContainer>
      <SectionHeader>
        <BackLink to={`/binder/${binderId}`}>
          <FiArrowLeft />
          Back to {binder.name}
        </BackLink>
        <SectionTitle>{section.name}</SectionTitle>
      </SectionHeader>
      
      <SectionDetailsRow>
        <DueDateCard onClick={() => setShowDatePicker(true)}>
          <DueDateIcon>
            <FiCalendar />
          </DueDateIcon>
          <DueDateInfo>
            <DueDateLabel>Due Date</DueDateLabel>
            <DueDateValue>
              {section.dueDate 
                ? format(section.dueDate, 'MMMM d, yyyy')
                : 'No due date set'}
            </DueDateValue>
          </DueDateInfo>
        </DueDateCard>
        
        <RecurrenceCard onClick={() => setShowDatePicker(true)}>
          <RecurrenceIcon>
            <FiRefreshCw />
          </RecurrenceIcon>
          <RecurrenceInfo>
            <RecurrenceLabel>Recurrence</RecurrenceLabel>
            <RecurrenceValue>
              {section.recurrence || 'No recurrence set'}
            </RecurrenceValue>
          </RecurrenceInfo>
        </RecurrenceCard>
        
        <UploadCard onClick={handleUploadClick}>
          <UploadIcon>
            <FiUpload />
          </UploadIcon>
          <UploadInfo>
            <UploadLabel>Upload File</UploadLabel>
            <UploadValue>Add a new file to this section</UploadValue>
          </UploadInfo>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
        </UploadCard>
      </SectionDetailsRow>
      
      {showDatePicker && (
        <DatePickerModal>
          <DatePickerContent>
            <DatePickerHeader>
              <h3>Set Due Date & Recurrence</h3>
              <CloseButton onClick={() => setShowDatePicker(false)}>✕</CloseButton>
            </DatePickerHeader>
            
            <DatePickerBody>
              <FormGroup>
                <FormLabel>Due Date</FormLabel>
                <FormInput
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Recurrence</FormLabel>
                <FormSelect
                  value={recurrence || ''}
                  onChange={(e) => setRecurrence(e.target.value as RecurrenceType)}
                >
                  {recurrenceOptions.map(option => (
                    <option key={option || 'none'} value={option || ''}>
                      {option || 'No recurrence'}
                    </option>
                  ))}
                </FormSelect>
              </FormGroup>
            </DatePickerBody>
            
            <DatePickerFooter>
              <Button onClick={() => setShowDatePicker(false)}>Cancel</Button>
              <Button primary onClick={handleSaveDueDate}>
                <FiSave />
                Save
              </Button>
            </DatePickerFooter>
          </DatePickerContent>
        </DatePickerModal>
      )}
      
      <FilesSection>
        <FilesSectionHeader>
          <h2>Files</h2>
          <UploadButton onClick={handleUploadClick}>
            <FiUpload />
            Upload File
          </UploadButton>
        </FilesSectionHeader>
        
        {section.files.length > 0 ? (
          <FilesTable>
            <thead>
              <tr>
                <FilesTableHeader>Name</FilesTableHeader>
                <FilesTableHeader>Type</FilesTableHeader>
                <FilesTableHeader>Size</FilesTableHeader>
                <FilesTableHeader>Last Modified</FilesTableHeader>
                <FilesTableHeader>Actions</FilesTableHeader>
              </tr>
            </thead>
            <tbody>
              {section.files.map(file => (
                <FilesTableRow key={file.id}>
                <FilesTableCell data-label="Name">
                    <FileNameCell>
                      {getFileIcon(file.type)}
                      <span>{file.name}</span>
                    </FileNameCell>
                  </FilesTableCell>
                  <FilesTableCell data-label="Type">{file.type.toUpperCase()}</FilesTableCell>
                  <FilesTableCell data-label="Size">{formatFileSize(file.size)}</FilesTableCell>
                  <FilesTableCell data-label="Last Modified">
                    {format(file.lastModified, 'MMM d, yyyy')}
                  </FilesTableCell>
                  <FilesTableCell data-label="Actions">
                    <FileActions>
                      <FileActionButton title="Download">
                        <FiDownload />
                      </FileActionButton>
                      <FileActionButton title="Delete">
                        <FiTrash2 />
                      </FileActionButton>
                    </FileActions>
                  </FilesTableCell>
                </FilesTableRow>
              ))}
            </tbody>
          </FilesTable>
        ) : (
          <EmptyState>
            <FiAlertCircle />
            <EmptyStateText>No files in this section yet</EmptyStateText>
            <Button primary onClick={handleUploadClick}>
              <FiUpload />
              Upload Your First File
            </Button>
          </EmptyState>
        )}
      </FilesSection>
      
      <CommentsSection>
        <CommentsSectionHeader>
          <h2>Comments</h2>
        </CommentsSectionHeader>
        
        {section.comments.length > 0 ? (
          <CommentsList>
            {section.comments.map(comment => (
              <CommentItem key={comment.id}>
                <CommentHeader>
                  <CommentCategoryBadge category={comment.category}>
                    {comment.category}
                  </CommentCategoryBadge>
                  <CommentDate>
                    {format(comment.createdAt, 'MMM d, yyyy h:mm a')}
                  </CommentDate>
                </CommentHeader>
                <CommentText>{comment.text}</CommentText>
              </CommentItem>
            ))}
          </CommentsList>
        ) : (
          <EmptyState>
            <FiMessageSquare />
            <EmptyStateText>No comments yet</EmptyStateText>
          </EmptyState>
        )}
        
        <CommentForm onSubmit={(e: FormEvent) => {
          e.preventDefault();
          if (commentText.trim() && binderId && sectionId) {
            addComment(binderId, sectionId, commentText.trim(), commentCategory);
            setCommentText('');
            setCommentCategory('general');
          }
        }}>
          <CommentFormTitle>Add a Comment</CommentFormTitle>
          
          <CommentTextarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write your comment here..."
            required
          />
          
          <CategorySelector>
            <CategoryOption 
              isSelected={commentCategory === 'informative'} 
              category="informative"
              onClick={() => setCommentCategory('informative')}
            >
              <input 
                type="radio" 
                name="category" 
                value="informative" 
                checked={commentCategory === 'informative'} 
                onChange={() => setCommentCategory('informative')} 
              />
              Informative
            </CategoryOption>
            
            <CategoryOption 
              isSelected={commentCategory === 'appearance'} 
              category="appearance"
              onClick={() => setCommentCategory('appearance')}
            >
              <input 
                type="radio" 
                name="category" 
                value="appearance" 
                checked={commentCategory === 'appearance'} 
                onChange={() => setCommentCategory('appearance')} 
              />
              Appearance
            </CategoryOption>
            
            <CategoryOption 
              isSelected={commentCategory === 'grammatical'} 
              category="grammatical"
              onClick={() => setCommentCategory('grammatical')}
            >
              <input 
                type="radio" 
                name="category" 
                value="grammatical" 
                checked={commentCategory === 'grammatical'} 
                onChange={() => setCommentCategory('grammatical')} 
              />
              Grammatical
            </CategoryOption>
            
            <CategoryOption 
              isSelected={commentCategory === 'general'} 
              category="general"
              onClick={() => setCommentCategory('general')}
            >
              <input 
                type="radio" 
                name="category" 
                value="general" 
                checked={commentCategory === 'general'} 
                onChange={() => setCommentCategory('general')} 
              />
              General
            </CategoryOption>
          </CategorySelector>
          
          <SubmitButton 
            type="submit" 
            disabled={!commentText.trim()}
          >
            <FiSend />
            Add Comment
          </SubmitButton>
        </CommentForm>
      </CommentsSection>
      
      <LastOpenedInfo>
        <FiClock />
        Last opened: {format(section.lastOpened, 'MMMM d, yyyy h:mm a')}
      </LastOpenedInfo>
    </SectionViewContainer>
  );
};

export default SectionView;
