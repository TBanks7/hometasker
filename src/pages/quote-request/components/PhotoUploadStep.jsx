import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const PhotoUploadStep = ({ photos, onPhotosUpdate, onNext, onBack }) => {
  const [uploadedPhotos, setUploadedPhotos] = useState(photos || []);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const maxPhotos = 10;
  const maxFileSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  const handleFileSelect = (files) => {
    const fileArray = Array.from(files);
    const validFiles = [];

    fileArray?.forEach((file) => {
      if (!allowedTypes?.includes(file?.type)) {
        alert(`${file?.name} is not a supported image format. Please use JPG, PNG, or WebP.`);
        return;
      }

      if (file?.size > maxFileSize) {
        alert(`${file?.name} is too large. Please use images under 5MB.`);
        return;
      }

      if (uploadedPhotos?.length + validFiles?.length >= maxPhotos) {
        alert(`Maximum ${maxPhotos} photos allowed.`);
        return;
      }

      validFiles?.push(file);
    });

    // Create preview URLs for valid files
    validFiles?.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPhoto = {
          id: Date.now() + Math.random(),
          file: file,
          preview: e?.target?.result,
          name: file?.name,
          size: file?.size,
          description: ''
        };

        setUploadedPhotos(prev => {
          const updated = [...prev, newPhoto];
          onPhotosUpdate(updated);
          return updated;
        });
      };
      reader?.readAsDataURL(file);
    });
  };

  const handleDrag = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (e?.type === 'dragenter' || e?.type === 'dragover') {
      setDragActive(true);
    } else if (e?.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setDragActive(false);

    if (e?.dataTransfer?.files && e?.dataTransfer?.files?.[0]) {
      handleFileSelect(e?.dataTransfer?.files);
    }
  };

  const handleFileInput = (e) => {
    if (e?.target?.files && e?.target?.files?.[0]) {
      handleFileSelect(e?.target?.files);
    }
  };

  const removePhoto = (photoId) => {
    const updated = uploadedPhotos?.filter(photo => photo?.id !== photoId);
    setUploadedPhotos(updated);
    onPhotosUpdate(updated);
  };

  const updatePhotoDescription = (photoId, description) => {
    const updated = uploadedPhotos?.map(photo =>
      photo?.id === photoId ? { ...photo, description } : photo
    );
    setUploadedPhotos(updated);
    onPhotosUpdate(updated);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="font-headline font-bold text-2xl text-foreground mb-2">
          Upload photos (Optional)
        </h2>
        <p className="text-muted-foreground">
          Photos help service providers give more accurate estimates and come prepared with the right tools
        </p>
      </div>
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-residential ${
          dragActive
            ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/30'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Icon name="Upload" size={32} color="var(--color-primary)" />
          </div>
          
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground mb-2">
              Drop photos here or click to browse
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              JPG, PNG, or WebP files up to 5MB each. Maximum {maxPhotos} photos.
            </p>
            
            <Button
              variant="outline"
              onClick={() => fileInputRef?.current?.click()}
              iconName="Camera"
              iconPosition="left"
            >
              Choose Photos
            </Button>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>
        </div>
      </div>
      {/* Uploaded Photos */}
      {uploadedPhotos?.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-headline font-semibold text-lg text-foreground">
            Uploaded Photos ({uploadedPhotos?.length}/{maxPhotos})
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {uploadedPhotos?.map((photo) => (
              <div key={photo?.id} className="bg-card rounded-lg border border-border p-4 space-y-3">
                <div className="relative">
                  <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
                    <Image
                      src={photo?.preview}
                      alt={photo?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <button
                    onClick={() => removePhoto(photo?.id)}
                    className="absolute top-2 right-2 w-8 h-8 bg-error text-error-foreground rounded-full flex items-center justify-center hover:bg-error/80 transition-residential"
                  >
                    <Icon name="X" size={16} />
                  </button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-body font-medium text-sm text-foreground truncate">
                      {photo?.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatFileSize(photo?.size)}
                    </span>
                  </div>
                  
                  <textarea
                    className="w-full px-3 py-2 border border-border rounded-lg text-sm resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    rows={2}
                    placeholder="Describe what this photo shows (optional)"
                    value={photo?.description}
                    onChange={(e) => updatePhotoDescription(photo?.id, e?.target?.value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Photo Tips */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Camera" size={20} color="var(--color-accent)" />
          <div>
            <h4 className="font-headline font-semibold text-foreground mb-2">
              Photo Tips for Better Estimates
            </h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Take clear, well-lit photos of the areas needing service</li>
              <li>• Include wide shots to show the full scope of work</li>
              <li>• Capture close-ups of specific problems or details</li>
              <li>• Show before photos of areas that need cleaning or repair</li>
              <li>• Include photos of access points and surrounding areas</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={onBack}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Back to Property Details
        </Button>
        
        <Button
          variant="default"
          onClick={onNext}
          iconName="ArrowRight"
          iconPosition="right"
        >
          Continue to Scheduling
        </Button>
      </div>
    </div>
  );
};

export default PhotoUploadStep;