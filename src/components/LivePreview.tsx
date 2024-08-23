import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { CardElement } from '../types/cardTypes';
import { FaTrash, FaWhatsapp } from 'react-icons/fa';
import html2canvas from 'html2canvas';

interface LivePreviewProps {
  elements: CardElement[];
  setElements: (newElements: CardElement[]) => void;
}

// ... rest of the LivePreview component code ...

export default LivePreview;