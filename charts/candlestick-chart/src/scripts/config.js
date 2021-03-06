define(function() {
	return {
		// Global settings
		FONT_FAMILY: "'Lato', sans-serif",
		TEXT_SIZE_SMALL: 12,
		TEXT_SIZE_MEDIUM: 14.4,
		KEY_TOP_MARGIN: 80,
		TOP_PADDING: 10,
		BOTTOM_PADDING: 50,
		MINIMUM_GRAPH_WIDTH_EXCLUDING_FURNATURE: 20,
		// Tracker label
		LABEL_TO_TRACKER_DISTANCE: 12,
		LABEL_BORDER_RADIUS: 6,
		LABEL_VALUE_WIDTH: 60,
		LABEL_TOP_PADDING: 8,
		LABEL_BOTTOM_PADDING: 9,
		LABEL_LEFT_PADDING: 6,
		LABEL_RIGHT_PADDING: 16,
		LABEL_INTERNAL_PADDING: 4,
		LABEL_INTERNAL_LINE_HEIGHT: 14,
		LABEL_KEY_RADIUS: 3,
		// Viewbox settings
		NEGATIVE_MARGIN: "-20%",
		// Spillover size
		SPILLOVER_TOP: 0,
		SPILLOVER_RIGHT: 0,
		SPILLOVER_BOTTOM: 0,
		SPILLOVER_LEFT: 0,
		// Marker settings
		TARGET_MARKER_COUNT: 5,
		SMALL_MARKER_SIZE: 5,
		// Range settings
		X_RANGE_PADDING: 0.1, // This constricts a range so start and points are not at the very ends of the axis
		// Trend line settings
		EXTRAPOLATION_FACTOR: 0.05, // How far beyond the min and max for the group the trend lines can extend
		TREND_LINE_KEY_LABEL_FONT_COLOR: '#AAAAAA',
		// Scatter point (dot) settings
		DOT_SIZE: 2.5,
		MINIMUM_SPACE_PER_DOT: 20,
		TOOLTIP_MARGIN: 2, // Distance of tooltip arrow from outer edge of dot
		// Tooltip plugin configuration
		TOOLTIP_MAX_VALUE_LENGTH: 20,
		// Key plugin configuration
	    KEY_PADDING_TOP: 20,
	    KEY_PADDING_RIGHT: 30,
	    KEY_PADDING_BOTTOM: 20,
	    KEY_PADDING_LEFT: 30,
		KEY_SIDE_PADDING: 30,
		KEY_MAX_VALUES: 12,
		KEY_MAX_VALUE_LENGTH: 100,
		KEY_PADDING: 20,
		KEY_COLUMNS: 1,
		KEY_ROWSPACING: 8,
		KEY_TEXT_SPACING: 5,
		KEY_NEUTRAL_FILL: "#E4E4E3",
		KEY_NEUTRAL_STROKE: "#676A68",
		// Tick mark configuration
		TICK_MARK_HORIZONTAL_PADDING: 10,
		TICK_MARK_VERTICAL_PADDING: 10,
		TICK_MARK_FONT_WEIGHT: 300,
		TOTAL_WIDTH_TO_X_TICK_RATIO: 1,
		ABBREVIATE_LABELS_THRESHOLD: 380
	}
});